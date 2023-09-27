import { ReactElement, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/store';
import { getDiscountsThunk } from '../../../store/cart/thunks';
import { selectCartData } from '../../../store/cart/selectors';
import { Button } from '../../../components/shared/Button';
import { formatPrice } from '../../../utils';
import { PromoCodes } from '../PromoCodes';
import { DELIVERY_PRICE } from '../../../constant';

import styles from './total.module.scss';
import { ModalWindow } from '../../../components/shared/ModalWindow';

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
    document.body.style.overflow = isCheckoutPopup ? 'hidden' : '';
  }, [isCheckoutPopup]);

  const subtotalCount = useMemo(() => {
    const subtotal = basket.lineItems.reduce((acc, item) => {
      const price = ((item.discountedPrice || item.price) / 100) * item.quantity;
      return acc + price;
    }, 0);

    return subtotal;
  }, [basket]);

  const discountCount = useMemo(() => {
    return basket.totalPrice / 100 - subtotalCount;
  }, [basket, subtotalCount]);

  return (
    <div className={styles.total}>
      <h3 className={styles.total__title}>Total</h3>
      <ul className={styles.total__list}>
        <li className={styles.total__list_item}>
          <span>Subtotal</span>
          <span>{formatPrice(subtotalCount)}</span>
        </li>
        <li className={styles.total__list_item}>
          <span>Delivery</span>
          <span>{formatPrice(DELIVERY_PRICE)}</span>
        </li>
        <li className={styles.total__list_item}>
          <span>Code Discount</span>
          <span>{formatPrice(discountCount)}</span>
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

      <PromoCodes />

      <ModalWindow
        children={
          <>
            <h3 className={styles.popup__header}>You are awesome 😘😘😘</h3>
            <Button
              type="button"
              name="Yes, I am"
              className={styles.popup__button}
              handleClick={(): void => setIsCheckoutPopup(false)}
            />
          </>
        }
        isOpen={isCheckoutPopup}
        onClose={(): void => setIsCheckoutPopup(false)}
        isShowCloseBtn={false}
        className={styles.popup__content}
        borderType="round"
      />
    </div>
  );
}
