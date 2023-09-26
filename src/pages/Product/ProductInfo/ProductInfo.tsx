import { ReactElement, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectCartError } from '../../../store/cart/selectors';
import { useAppDispatch } from '../../../store/store';
import { updateCartThunk } from '../../../store/cart/thunks';
import { IProduct } from '../../../types/interfaces';
import { Button } from '../../../components/shared/Button';
import { ErrorMessage } from '../../../components/shared/ErrorMessage';
import { useResetError } from '../../../hooks';
import { ProductTitle } from '../ProductTitle';
import { ProductDescription } from '../ProductDescription';

import styles from './productInfo.module.scss';
import classnames from 'classnames';

interface IProductDetailsProps {
  product: IProduct;
}

export default function ProductInfo({ product }: IProductDetailsProps): ReactElement {
  const cart = useSelector(selectCart);
  const error = useSelector(selectCartError);

  const { productId } = product;

  const dispatch = useAppDispatch();

  useResetError(error, 3000);

  const cartItem = useMemo(() => {
    return cart.lineItems.find((item) => item.productId === productId);
  }, [cart.lineItems, productId]);

  const addToCart = useCallback(() => {
    dispatch(
      updateCartThunk({
        id: cart.id,
        version: cart.version,
        actions: [
          {
            action: 'addLineItem',
            productId,
            variantId: 1,
            quantity: 1,
          },
        ],
      }),
    );
  }, [dispatch, cart.id, cart.version, productId]);

  const removeCartItem = useCallback(() => {
    dispatch(
      updateCartThunk({
        id: cart.id,
        version: cart.version,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId: cartItem?.itemId,
            quantity: cartItem?.quantity,
          },
        ],
      }),
    );
  }, [dispatch, cart.id, cart.version, cartItem?.itemId, cartItem?.quantity]);

  return (
    <>
      <div className={styles.product__details}>
        <ProductTitle product={product} />

        {!cartItem ? (
          <Button type="button" name="Add to Cart (●ω●)ノ" className={styles.button} handleClick={addToCart} />
        ) : (
          <Button
            type="button"
            name="Remove from Cart"
            className={classnames(styles.button, styles.button__remove)}
            handleClick={removeCartItem}
          />
        )}

        <ProductDescription product={product} />
      </div>
      {error && <ErrorMessage text={'Something wrong with Cart. Try again!'} className={styles.error__message} />}
    </>
  );
}
