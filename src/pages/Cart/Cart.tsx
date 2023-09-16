import { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { deleteCartThunk, getCartThunk, updateCartThunk } from '../../store/cart/thunks';
import { selectCartData, selectCartError, selectCartLoadingStatus } from '../../store/cart/selectors';
import { EmptyCart } from './EmptyMessage';
import { Button } from '../../components/shared/Button';
import { Total } from './Total';
import { CartList } from './CartList';
import { IItemCart } from '../../store/cart/types';
import { ErrorMessage } from '../../components/shared/ErrorMessage';
import { resetCartError } from '../../store/cart/slice';

import styles from './cart.module.scss';

export default function Cart(): ReactElement {
  const [isConfirmPopup, setIsConfirmPopup] = useState(false);

  const { basket } = useSelector(selectCartData);

  const status = useSelector(selectCartLoadingStatus);
  const error = useSelector(selectCartError);

  const dispatch = useAppDispatch();

  const isEmpty = basket.lineItems.length === 0;

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(resetCartError());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (isConfirmPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isConfirmPopup]);

  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  function clearCart(): void {
    setIsConfirmPopup(false);
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
      {isEmpty && status !== 'loading' && <EmptyCart />}
      {!isEmpty && (
        <div className={styles.cart__container}>
          <div className={styles.items}>
            <h2 className={styles.items__title}>Cart({basket.lineItems.length})</h2>
            <CartList basket={basket} handleRemoveCartItem={removeCartItem} />
            <Button
              type="button"
              name="Clear Cart"
              className={styles.items__button_clear}
              handleClick={(): void => setIsConfirmPopup(true)}
              disabled={isEmpty}
            />
          </div>
          <Total />
        </div>
      )}
      {isConfirmPopup && (
        <div className={styles.popup}>
          <div className={styles.popup__content}>
            <h3 className={styles.popup__header}>Are you sure you want to clear the Cart?</h3>
            <div className={styles.popup__buttons}>
              <Button
                type="button"
                name="Cancel"
                className={styles.popup__buttons_cancel}
                handleClick={(): void => setIsConfirmPopup(false)}
              />
              <Button
                type="button"
                name="Yes, clear"
                className={styles.popup__buttons_confirm}
                handleClick={clearCart}
              />
            </div>
          </div>
        </div>
      )}
      {error && <ErrorMessage text={'Something wrong with Cart. Try again!'} className={styles.error__message} />}
    </div>
  );
}
