import { ReactElement, FormEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';
import { updateCartThunk, getDiscountsThunk } from '../../../store/cart/thunks';
import { selectCartData } from '../../../store/cart/selectors';
import { Button } from '../../../components/shared/Button';
import { IPromoCode } from '../../../store/cart/types';
import { formatPrice } from '../../../utils';
import { ErrorMessage } from '../../../components/shared/ErrorMessage';

import styles from './total.module.scss';

const DELIVERY_PRICE = 120;
const CODE_ERROR = 'The code you entered is not valid.';

export default function Total(): ReactElement {
  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [isCheckoutPopup, setIsCheckoutPopup] = useState(false);

  const { basket, discounts } = useSelector(selectCartData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (discounts.length === 0) {
      dispatch(getDiscountsThunk());
    }
  }, [dispatch, discounts]);

  useEffect(() => {
    if (isCheckoutPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isCheckoutPopup]);

  function getCodeName(codeId: string): string | undefined {
    const code = discounts.find((item) => item.id === codeId);

    return code?.code;
  }

  function applyCode(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const isCodeValid = discounts.find((item) => item.code === code);

    if (!isCodeValid) {
      setIsError(true);
      return;
    }

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
  }

  function removeCode(item: IPromoCode): void {
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
  }

  function countSubtotal(): number {
    const subtotal = basket.lineItems.reduce((acc, item) => {
      const price = ((item.discountedPrice || item.price) / 100) * item.quantity;
      return acc + price;
    }, 0);

    return subtotal;
  }

  function countCodeDiscount(): number {
    return basket.totalPrice / 100 - countSubtotal();
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
          <span>{formatPrice(basket.totalPrice / 100 + DELIVERY_PRICE)}</span>
        </li>
      </ul>

      <Button
        type="button"
        name="To Checkout"
        className={styles.total__button_checkout}
        handleClick={(): void => setIsCheckoutPopup(true)}
      />

      <div className={styles.promo}>
        <h4 className={styles.promo__title}>Have a promo code?</h4>
        <form className={styles.promo__form} onSubmit={(e): void => applyCode(e)} noValidate>
          <input
            className={styles.promo__form_input}
            placeholder="Promo code"
            value={code}
            onInput={(event: React.FormEvent<HTMLInputElement>): void => setCode(event.currentTarget.value)}
            onChange={(): void => setIsError(false)}
          />
          <Button type="submit" name="Apply" className={styles.promo__form_button} />
        </form>

        {isError && <ErrorMessage text={CODE_ERROR} className={styles.promo__error} />}

        {basket.codes.length > 0 && (
          <ul className={styles.promo__codes}>
            {basket.codes.map((item) => (
              <li key={item.id} className={styles.code__item}>
                {getCodeName(item.id) && (
                  <span className={styles.code__item_label}>{getCodeName(item.id)} is applied</span>
                )}
                <Button
                  type="button"
                  name="Remove"
                  className={styles.code__item_button}
                  handleClick={(): void => removeCode(item)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      {isCheckoutPopup && (
        <div className={styles.popup}>
          <div className={styles.popup__content}>
            <h3 className={styles.popup__header}>You are awesome 😘😘😘</h3>
            <Button
              type="button"
              name="Yes, I am"
              className={styles.popup__button}
              handleClick={(): void => setIsCheckoutPopup(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
