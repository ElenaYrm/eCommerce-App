import { ReactElement, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductData } from '../../utils';
import { initialProduct } from '../../constant/initialProduct';
import { RootState } from '../../store/store';
import { saveProduct } from '../../store/product/slice';

// const productId = 'e2e31f59-6a44-4af0-882b-c56f63f7f14e';

export default function Product(): ReactElement {
  const id = useParams().id || '';
  const [product, setProduct] = useState(initialProduct);

  const savedProduct = useSelector((store: RootState) => store.product);
  const dispatch = useDispatch();

  const getProduct = useCallback(async () => {
    try {
      const data = (await getProductData(id)) || initialProduct;

      setProduct(data);
      dispatch(saveProduct(data));
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Something went wrong: ${err.message}`);
      }
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (savedProduct.productId === id) {
      setProduct(savedProduct);
    } else {
      getProduct();
    }
  }, [id, savedProduct, getProduct]);

  return (
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>{product.artist}</h1>
      <p>{product.description}</p>
    </div>
  );
}
