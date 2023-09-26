import { ReactElement, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';
import { getDiscountsThunk } from '../../../store/cart/thunks';
import { selectCartData } from '../../../store/cart/selectors';
import { Button } from '../../../components/shared/Button';
import { formatPrice } from '../../../utils';
import { PromoCodes } from '../PromoCodes';

import styles from './total.module.scss';

const DELIVERY_PRICE = 120;

export default function Total(): ReactElement {
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

      <PromoCodes basket={basket} discounts={discounts} dispatch={dispatch} />

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
