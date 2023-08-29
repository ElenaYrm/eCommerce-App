import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { productThunk } from '../../store/product/thunks';
import { useAppDispatch } from '../../store/store';

// const productId = 'e2e31f59-6a44-4af0-882b-c56f63f7f14e';

export default function Product(): ReactElement {
  const id = useParams().id || '';

  const { product } = useSelector((store: RootState) => store.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product.productId !== id) {
      dispatch(productThunk(id));
    }
  }, [id]);

  return (
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>{product.artist}</h1>
      <p>{product.description}</p>
    </div>
  );
}
