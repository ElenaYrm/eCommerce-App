import { ReactElement } from 'react';
import { EmptyCart } from './EmptyMessage';
import { Button } from '../../components/shared/Button';
import { Total } from './Total';
import { CartList } from './CartList';

import styles from './cart.module.scss';

export default function Cart(): ReactElement {
  const isEmpty = false;

  return (
    <div className={styles.cart}>
      {isEmpty && <EmptyCart />}
      {!isEmpty && (
        <div className={styles.cart__container}>
          <div className={styles.items}>
            <h2 className={styles.items__title}>Cart(0)</h2>
            <CartList />
            <Button type="button" name="Clear Cart" className={styles.items__button_clear} />
          </div>
          <Total />
        </div>
      )}
    </div>
  );
}
