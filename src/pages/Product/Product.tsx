import { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { productThunk } from '../../store/product/thunks';
import { useAppDispatch } from '../../store/store';
import { Slider } from '../../components/Slider/Slider';
import { ProductDetails } from './ProductDetails';
import { Loader } from '../../components/shared/Loader';

import styles from './product.module.scss';

// const productId = 'e2e31f59-6a44-4af0-882b-c56f63f7f14e';

export default function Product(): ReactElement {
  const id = useParams().id || '';

  const { product, status } = useSelector((store: RootState) => store.product);
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
    <div className={styles.product}>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <>
          <Slider images={product.images} fullscreen={fullscreen} handleClick={handleFullScreen} />
          <ProductDetails product={product} />
        </>
      )}
    </div>
  );
}
