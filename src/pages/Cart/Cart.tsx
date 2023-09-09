import { ReactElement, useEffect } from 'react';
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

  useEffect(() => {
    if (!cart.id) {
      dispatch(getCartThunk(isAuthorized));
    }
  }, [isAuthorized]);

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
      <button type="button" onClick={handleClick} disabled={cart.lineItems.length === 0}>
        Clear cart
      </button>
    </div>
  );
}
