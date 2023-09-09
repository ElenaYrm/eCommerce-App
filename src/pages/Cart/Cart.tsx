import { ReactElement } from 'react';
import { EmptyCart } from './EmptyCart';

import styles from './cart.module.scss';

export default function Cart(): ReactElement {
  const isEmpty = true;

  return <div className={styles.cart}>{isEmpty && <EmptyCart />}</div>;
}
