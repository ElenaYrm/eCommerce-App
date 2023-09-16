import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { selectCatalogLoadingInfo, selectProductsInfo } from '../../store/catalog/selectors';
import { resetProductList } from '../../store/catalog/slice';
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
  const { status, error } = useSelector(selectCatalogLoadingInfo);
  const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!cart.id) {
      dispatch(getCartThunk());
    }
  }, [cart.id, dispatch]);

  useEffect(() => {
    changeParams(setSearchParams, '1', SearchParams.Page);
    dispatch(productListThunk({ params: getSearchParams(searchParams), list: productList }));

    return () => {
      dispatch(resetProductList());
    };
  }, []);

  function loadProducts(): void {
    changeParams(setSearchParams, `${Number(searchParams.get(SearchParams.Page)) + 1}`, SearchParams.Page);
    dispatch(productListThunk({ params: getSearchParams(searchParams), list: productList }));
  }

  return (
    <>
      {error && <ErrorMessage text={error} />}
      {!error && productList.length > 0 && (
        <InfiniteScroll
          dataLength={productList.length}
          next={loadProducts}
          hasMore={productList.length < totalProducts}
          loader={<Loader />}
          scrollThreshold={0.8}
          className={styles.products__scroll}
        >
          <ul className={styles.products}>
            {productList.map((item) => (
              <ProductCard item={item} key={item.productId} className={styles.products__item} />
            ))}
          </ul>
        </InfiniteScroll>
      )}
      {status === 'success' && !error && productList.length === 0 && (
        <div className={styles.products__error}>No items found┗(^o^ )┓三</div>
      )}

      {cartError && <ErrorMessage text={'Something wrong with Cart. Try again!'} className={styles.error__message} />}
    </>
  );
}

export default ProductsList;
