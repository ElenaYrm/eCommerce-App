import { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productThunk } from '../../store/product/thunks';
import { useAppDispatch } from '../../store/store';
import { Slider } from '../../components/Slider';
import { ProductInfo } from '../../components/ProductInfo';
import { Loader } from '../../components/shared/Loader';
import { NotFound } from '../NotFound';

import styles from './product.module.scss';
import { selectProduct } from '../../store/product/selectors';

export default function Product(): ReactElement {
  const id = useParams().id || '';

  const { product, status, error } = useSelector(selectProduct);
  const { productId } = product;

  const dispatch = useAppDispatch();

  const [fullscreen, setFullscreen] = useState(false);

  function handleFullScreen(): void {
    setFullscreen((mode) => (mode = !mode));
  }

  useEffect(() => {
    if (productId !== id) {
      dispatch(productThunk(id));
    }
  }, [id, dispatch, productId]);

  useEffect(() => {
    document.body.style.overflow = fullscreen ? 'hidden' : '';
  }, [fullscreen]);

  return (
    <div className={styles.product} data-testid="product">
      {status === 'loading' && <Loader type="text" />}
      {error && <NotFound />}
      {status === 'success' && (
        <>
          <Slider images={product.images} fullscreen={fullscreen} handleClick={handleFullScreen} />
          <ProductInfo />
        </>
      )}
    </div>
  );
}
