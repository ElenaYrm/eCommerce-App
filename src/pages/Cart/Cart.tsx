import { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { deleteCartThunk, getCartThunk, getDiscountsThunk, updateCartThunk } from '../../store/cart/thunks';
import { useSelector } from 'react-redux';
import { selectCartData } from '../../store/cart/selectors';

import styles from './cart.module.scss';

export default function Cart(): ReactElement {
  const { basket, discounts } = useSelector(selectCartData);
  const dispatch = useAppDispatch();
  const [code, setCode] = useState('');

  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  useEffect(() => {
    if (discounts.length === 0) {
      dispatch(getDiscountsThunk());
    }
  }, [dispatch, discounts]);

  function handleClick(event: React.MouseEvent): void {
    event.preventDefault();
    dispatch(deleteCartThunk({ id: basket.id, version: basket.version }));
  }

  return (
    <div
      style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      className={styles.cart}
    >
      <h1>Cart</h1>
      {basket.lineItems.length > 0 ? (
        <ul>
          {basket.lineItems.map((item) => (
            <li key={item.itemId}>
              <div>{`${item.name} ${item.quantity} ${item.price}`}</div>
              <button
                type="button"
                onClick={(): void => {
                  dispatch(
                    updateCartThunk({
                      id: basket.id,
                      version: basket.version,
                      actions: [
                        {
                          action: 'removeLineItem',
                          lineItemId: item.itemId,
                          quantity: 1,
                        },
                      ],
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
                id: basket.id,
                version: basket.version,
                actions: [
                  {
                    action: 'addDiscountCode',
                    code: code,
                  },
                ],
              }),
            );
            setCode('');
          }}
        >
          Apply code
        </button>
      </div>
      <button type="button" onClick={handleClick} disabled={basket.lineItems.length === 0}>
        Clear cart
      </button>
      <div>{basket.totalPrice}</div>
      {basket.codes.length > 0 && (
        <ul>
          {basket.codes.map((item) => (
            <li key={item.id}>
              <span>{item.id}</span>
              <button
                type="button"
                onClick={(): void => {
                  dispatch(
                    updateCartThunk({
                      id: basket.id,
                      version: basket.version,
                      actions: [
                        {
                          action: 'removeDiscountCode',
                          discountCode: {
                            typeId: 'discount-code',
                            id: item.id,
                          },
                        },
                      ],
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
