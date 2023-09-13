import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { deleteCartThunk, getCartThunk, updateCartThunk } from '../../store/cart/thunks';
import { selectCart } from '../../store/cart/selectors';
import { selectIsAuthorized } from '../../store/auth/selectors';
import { EmptyCart } from './EmptyMessage';
import { Button } from '../../components/shared/Button';
import { Total } from './Total';
import { CartList } from './CartList';

import styles from './cart.module.scss';
import { IItemCart } from '../../store/cart/types';

export default function Cart(): ReactElement {
  const { basket, discounts } = useSelector(selectCartData);
  const dispatch = useAppDispatch();

  const isEmpty = cart.lineItems.length === 0;

  console.log(cart);

  useEffect(() => {
    dispatch(getCartThunk(isAuthorized));
  }, [isAuthorized, dispatch]);

  function clearCart(): void {
    dispatch(deleteCartThunk({ id: cart.id, version: cart.version, isAuth: isAuthorized }));
  }

  function removeCartItem(item: IItemCart): void {
    dispatch(
      updateCartThunk({
        id: cart.id,
        version: cart.version,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId: item.itemId,
            quantity: item.quantity,
          },
        ],
        isAuth: isAuthorized,
      }),
    );
  }

  return (
    <div className={styles.cart}>
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <div className={styles.cart__container}>
          <div className={styles.items}>
            <h2 className={styles.items__title}>Cart({cart.lineItems.length})</h2>
            <CartList cart={cart} handleRemoveCartItem={removeCartItem} />
            <Button
              type="button"
              name="Clear Cart"
              className={styles.items__button_clear}
              handleClick={clearCart}
              disabled={isEmpty}
            />
          </div>
          <Total cart={cart} />
        </div>
      )}
    </div>
  );
}
