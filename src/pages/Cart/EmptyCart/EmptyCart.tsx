import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../router/constants/paths';
import { Page } from '../../../router/types';
import { EMPTY_CART_TITLE, EMPTY_CART_MESSAGE } from '../../../constant';

import styles from './emptyCart.module.scss';

export default function EmptyCart(): ReactElement {
  return (
    <div className={styles.cart__empty}>
      <h2 className={styles.title}>{EMPTY_CART_TITLE}</h2>
      <p className={styles.text}>{EMPTY_CART_MESSAGE}</p>
      <Link to={PATH[Page.Catalog]} className={styles.link}>
        To Catalog
      </Link>
    </div>
  );
}
