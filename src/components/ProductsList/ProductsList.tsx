import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectAuthLoadingInfo, selectProductlist } from '../../store/catalog/selectors';
import { useAppDispatch } from '../../store/store';
import { productListThunk } from '../../store/catalog/thunks';
import { ProductCard } from './ProductCard';
import { Loader } from '../shared/Loader';
import { ErrorMessage } from '../shared/ErrorMessage';
import { getSearchParams } from '../../utils';

import styles from './productsList.module.scss';

function ProductsList(): ReactElement {
  const [searchParams] = useSearchParams();
  const productList = useSelector(selectProductlist);
  const { status, error } = useSelector(selectAuthLoadingInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productListThunk(getSearchParams(searchParams)));
  }, [searchParams, dispatch]);

  return (
    <>
      {status === 'loading' && <Loader />}
      {error && <ErrorMessage text={error} />}

      {status === 'success' && !error && productList.length > 0 && (
        <ul className={styles.products}>
          {productList.map((item) => (
            <ProductCard item={item} key={item.productId} className={styles.products__item} />
          ))}
        </ul>
      )}
      {status === 'success' && !error && productList.length === 0 && <div>There are no items</div>}
    </>
  );
}

export default ProductsList;
