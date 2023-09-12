import { ReactElement, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../../store/auth/selectors';
import { useAppDispatch } from '../../../store/store';
import { updateCartThunk } from '../../../store/cart/thunks';
import { Button } from '../../../components/shared/Button';

import styles from './total.module.scss';
import { IPromoCode, ICart } from '../../../store/cart/types';
import { formatPrice } from '../../../utils';

interface ITotalProps {
  cart: ICart;
  // code: string;
  // setCode: (code: string) => void;
  // handleRemoveCode: (code: IPromoCode) => void;
  // handleApplyCode: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Total({ cart }: ITotalProps): ReactElement {
  const DELIVERY_PRICE = 120;

  const isAuthorized = useSelector(selectIsAuthorized);
  // const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();
  const [code, setCode] = useState('');

  function applyCode(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

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

  function countSubtotal(): number {
    const subtotal = cart.lineItems.reduce((acc, item) => {
      const price = ((item.discountedPrice || item.price) / 100) * item.quantity;
      return acc + price;
    }, 0);

    return subtotal;
  }

  function countCodeDiscount(): number {
    return cart.totalPrice / 100 - countSubtotal();
  }

  return (
    <div className={styles.total}>
      <h3 className={styles.total__title}>Total</h3>
      <ul className={styles.total__list}>
        <li className={styles.total__list_item}>
          <span>Subtotal</span>
          <span>{formatPrice(countSubtotal())}</span>
        </li>
        <li className={styles.total__list_item}>
          <span>Delivery</span>
          <span>{formatPrice(DELIVERY_PRICE)}</span>
        </li>
        <li className={styles.total__list_item}>
          <span>Code Discount</span>
          <span>{formatPrice(countCodeDiscount())}</span>
        </li>
        <li className={styles.total__list_item}>
          <span>Total</span>
          <span>{formatPrice(cart.totalPrice / 100)}</span>
        </li>
      </ul>

      <Button type="button" name="To Checkout" className={styles.total__button_checkout} />

      <div className={styles.total__promo}>
        <h4 className={styles.promo__title}>Have a promo code?</h4>
        <form className={styles.promo__form} onSubmit={(e): void => applyCode(e)} noValidate>
          <input
            className={styles.promo__form_input}
            placeholder="Promo code"
            value={code}
            onInput={(event: React.FormEvent<HTMLInputElement>): void => setCode(event.currentTarget.value)}
          />
          <Button type="submit" name="Apply" className={styles.promo__form_button} />
        </form>

        {cart.codes.length > 0 && (
          <ul className={styles.codes}>
            {cart.codes.map((item) => (
              <li key={item.id} className={styles.codes__item}>
                <span className={styles.codes__item_label}>ART is applied</span>
                <Button
                  type="button"
                  name="Remove"
                  className={styles.codes__item_button}
                  handleClick={(): void => removeCode(item)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
