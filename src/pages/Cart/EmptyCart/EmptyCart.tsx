import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../router/constants/paths';
import { Page } from '../../../router/types';

import styles from './emptyCart.module.scss';

export default function EmptyCart(): ReactElement {
  return (
    <div className={styles.cart__empty}>
      <h2 className={styles.title}>Cart is empty (´•̥̥̥o•̥̥̥`)</h2>
      <p className={styles.text}>
        We highly recommend to check out Scoop’s catalog and get some amazing art for your eyes and your soul.
      </p>
      <Link to={PATH[Page.Catalog]} className={styles.link}>
        To Catalog
      </Link>
    </div>
  );
}
