import { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { deleteCartThunk, getCartThunk, updateCartThunk } from '../../store/cart/thunks';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/cart/selectors';
import { selectIsAuthorized } from '../../store/auth/selectors';

import styles from './cart.module.scss';

export default function Cart(): ReactElement {
  const isAuthorized = useSelector(selectIsAuthorized);
  const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();
  const [code, setCode] = useState('');

  useEffect(() => {
    if (!cart.id) {
      dispatch(getCartThunk(isAuthorized));
    }
  }, [isAuthorized, cart.id, dispatch]);

  function handleClick(event: React.MouseEvent): void {
    event.preventDefault();
    dispatch(deleteCartThunk({ id: cart.id, version: cart.version, isAuth: isAuthorized }));
  }

  return (
    <div
      style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      className={styles.cart}
    >
      <h1>Cart</h1>
      {cart.lineItems.length > 0 ? (
        <ul>
          {cart.lineItems.map((item) => (
            <li key={item.itemId}>
              <div>{`${item.name} ${item.quantity} ${item.price}`}</div>
              <button
                type="button"
                onClick={(): void => {
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
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>Cart is empty</div>
      )}
      <div>
        <input
          type="text"
          value={code}
          onInput={(event: React.FormEvent<HTMLInputElement>): void => setCode(event.currentTarget.value)}
        />
        <button
          type="button"
          onClick={(): void => {
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
          }}
        >
          Apply code
        </button>
      </div>
      <button type="button" onClick={handleClick} disabled={cart.lineItems.length === 0}>
        Clear cart
      </button>
      <div>{cart.totalPrice}</div>
      {cart.codes.length > 0 && (
        <ul>
          {cart.codes.map((item) => (
            <li key={item.id}>
              <span>{item.id}</span>
              <button
                type="button"
                onClick={(): void => {
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
                }}
              >
                Remove code
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
