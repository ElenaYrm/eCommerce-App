import { ReactElement } from 'react';
import { Button } from '../../../components/shared/Button';

import styles from './total.module.scss';

export default function Total(): ReactElement {
  return (
    <div className={styles.total}>
      <h3 className={styles.total__title}>Total</h3>
      <ul className={styles.total__list}>
        <li className={styles.total__list_item}>
          <span>Subtotal</span>
          <span>$300,000</span>
        </li>
        <li className={styles.total__list_item}>
          <span>Delivery</span>
          <span>$120</span>
        </li>
        <li className={styles.total__list_item}>
          <span>Discounted</span>
          <span>-$190,000</span>
        </li>
        <li className={styles.total__list_item}>
          <span>Total</span>
          <span>$250,000</span>
        </li>
      </ul>

      <Button type="button" name="To Checkout" className={styles.total__button_checkout} />

      <div className={styles.total__promo}>
        <h4 className={styles.promo__title}>Have a promo code?</h4>
        <div className={styles.promo__form}>
          <input className={styles.promo__form_input} placeholder="Promo code" />
          <Button type="button" name="Apply" className={styles.promo__form_button} />
        </div>
      </div>
    </div>
  );
}
