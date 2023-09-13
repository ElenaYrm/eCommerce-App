import { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { selectAuthLoadingInfo, selectProductsInfo } from '../../store/catalog/selectors';
import { useAppDispatch } from '../../store/store';
import { productListThunk } from '../../store/catalog/thunks';
import { getCartThunk } from '../../store/cart/thunks';
import { selectCart } from '../../store/cart/selectors';
import { ProductCard } from './ProductCard';
import { Loader } from '../shared/Loader';
import { ErrorMessage } from '../shared/ErrorMessage';
import { changeParams, getSearchParams } from '../../utils';
import { SearchParams } from '../../types/enums';

import styles from './productsList.module.scss';

function ProductsList(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const { productList, totalProducts } = useSelector(selectProductsInfo);
  const { status, error } = useSelector(selectAuthLoadingInfo);
  const [page, setPage] = useState(1);

  const cart = useSelector(selectCart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = getSearchParams(searchParams);
    dispatch(productListThunk(params));
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (!cart.id) {
      dispatch(getCartThunk());
    }
  }, [cart.id, dispatch]);

  useEffect(() => {
    changeParams(setSearchParams, `${page}`, SearchParams.Page);
  }, [page]);

  function loadProducts(): void {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <>
      {status === 'loading' && <Loader />}
      {error && <ErrorMessage text={error} />}

      {status === 'success' && !error && productList.length > 0 && (
        <InfiniteScroll
          dataLength={productList.length}
          next={loadProducts}
          hasMore={productList.length < totalProducts}
          loader={<Loader />}
          scrollThreshold={0.7}
        >
          <ul className={styles.products}>
            {productList.map((item) => (
              <ProductCard item={item} key={item.productId} className={styles.products__item} />
            ))}
          </ul>
        </InfiniteScroll>
      )}
      {status === 'success' && !error && productList.length === 0 && (
        <div className={styles.products__error}>No items found¯\_(:|)_/¯</div>
      )}
    </>
  );
}

export default ProductsList;
