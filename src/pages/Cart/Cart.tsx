import { ReactElement, useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { deleteCartThunk, getCartThunk, updateCartThunk } from '../../store/cart/thunks';
import { selectCartData, selectCartLoadingInfo } from '../../store/cart/selectors';
import { EmptyCart } from './EmptyCart';
import { Button } from '../../components/shared/Button';
import { CartTotal } from '../../components/CartTotal';
import { CartList } from '../../components/CartList';
import { IItemCart } from '../../store/cart/types';
import { Notice } from '../../components/shared/Notice';

import styles from './cart.module.scss';
import { useResetError } from '../../hooks';
import { ModalWindow } from '../../components/shared/ModalWindow';

export default function Cart(): ReactElement {
  const [isConfirmPopup, setIsConfirmPopup] = useState(false);

  const { basket } = useSelector(selectCartData);
  const { status, error } = useSelector(selectCartLoadingInfo);

  const dispatch = useAppDispatch();

  const isEmpty = basket.lineItems.length === 0;

  useResetError(error, 3000);

  useEffect(() => {
    document.body.style.overflow = isConfirmPopup ? 'hidden' : '';
  }, [isConfirmPopup]);

  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  const clearCart = useCallback(() => {
    setIsConfirmPopup(false);
    dispatch(deleteCartThunk({ id: basket.id, version: basket.version }));
  }, [dispatch, basket.id, basket.version]);

  const removeCartItem = useCallback(
    (item: IItemCart) => {
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
    },
    [dispatch, basket],
  );

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
          <CartTotal />
        </div>
      )}

      <ModalWindow
        isOpen={isConfirmPopup}
        isShowCloseBtn={false}
        onClose={(): void => setIsConfirmPopup(false)}
        borderType="round"
        className={styles.popup__content}
      >
        <>
          <h3 className={styles.popup__header}>Are you sure you want to clear the Cart?</h3>
          <div className={styles.popup__buttons}>
            <Button
              type="button"
              name="Cancel"
              className={styles.popup__buttons_cancel}
              handleClick={(): void => setIsConfirmPopup(false)}
            />
            <Button type="button" name="Yes, clear" className={styles.popup__buttons_confirm} handleClick={clearCart} />
          </div>
        </>
      </ModalWindow>

      {error && <Notice text={'Something wrong with Cart. Try again!'} type="error" />}
    </div>
  );
}
