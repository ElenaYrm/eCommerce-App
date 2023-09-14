import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { deleteCartThunk, getCartThunk, updateCartThunk } from '../../store/cart/thunks';
import { selectCartData } from '../../store/cart/selectors';
import { EmptyCart } from './EmptyMessage';
import { Button } from '../../components/shared/Button';
import { Total } from './Total';
import { CartList } from './CartList';
import { IItemCart } from '../../store/cart/types';

import styles from './cart.module.scss';

export default function Cart(): ReactElement {
  const { basket } = useSelector(selectCartData);
  const dispatch = useAppDispatch();

  const isEmpty = basket.lineItems.length === 0;

  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  function clearCart(): void {
    dispatch(deleteCartThunk({ id: basket.id, version: basket.version }));
  }

  function removeCartItem(item: IItemCart): void {
    dispatch(
      updateCartThunk({
        id: basket.id,
        version: basket.version,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId: item.itemId,
            quantity: item.quantity,
          },
        ],
      }),
    );
  }

  return (
    <div className={styles.cart}>
      {isEmpty && <EmptyCart />}
      {!isEmpty && (
        <div className={styles.cart__container}>
          <div className={styles.items}>
            <h2 className={styles.items__title}>Cart({basket.lineItems.length})</h2>
            <CartList basket={basket} handleRemoveCartItem={removeCartItem} />
            <Button
              type="button"
              name="Clear Cart"
              className={styles.items__button_clear}
              handleClick={clearCart}
              disabled={isEmpty}
            />
          </div>
          <Total />
        </div>
      )}
    </div>
  );
}
