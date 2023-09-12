import { ReactElement, useEffect, useState } from 'react';
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
import { IItemCart, IPromoCode } from '../../store/cart/types';

export default function Cart(): ReactElement {
  const isAuthorized = useSelector(selectIsAuthorized);
  const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();
  const [code, setCode] = useState('');

  const isEmpty = cart.lineItems.length === 0;

  useEffect(() => {
    if (!cart.id) {
      dispatch(getCartThunk(isAuthorized));
    }
  }, [isAuthorized, cart.id, dispatch]);

  function handleClick(): void {
    // event.preventDefault();
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
            quantity: 1,
          },
        ],
        isAuth: isAuthorized,
      }),
    );
  }

  function applyCode(): void {
    dispatch(
      updateCartThunk({
        id: cart.id,
        version: cart.version,
        actions: [
          {
            action: 'addDiscountCode',
            code: code,
          },
        ],
        isAuth: isAuthorized,
      }),
    );
    setCode('');
  }

  function removeCode(item: IPromoCode): void {
    dispatch(
      updateCartThunk({
        id: cart.id,
        version: cart.version,
        actions: [
          {
            action: 'removeDiscountCode',
            discountCode: {
              typeId: 'discount-code',
              id: item.id,
            },
          },
        ],
        isAuth: isAuthorized,
      }),
    );
  }

  return (
    <div className={styles.cart}>
      {isEmpty && <EmptyCart />}
      {!isEmpty && (
        <div className={styles.cart__container}>
          <div className={styles.items}>
            <h2 className={styles.items__title}>Cart(0)</h2>
            <CartList cart={cart} handleRemoveCartItem={removeCartItem} />
            <Button
              type="button"
              name="Clear Cart"
              className={styles.items__button_clear}
              handleClick={handleClick}
              disabled={isEmpty}
            />
          </div>
          <Total cart={cart} code={code} setCode={setCode} handleApplyCode={applyCode} handleRemoveCode={removeCode} />
        </div>
      )}
    </div>
  );
}
