import { ReactElement } from 'react';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { Link } from 'react-router-dom';

import styles from './notFound.module.scss';

export default function NotFound(): ReactElement {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__content}>
        <h2>Page not found (´•̥̥̥o•̥̥̥`)</h2>
        <p>That's sad... But you know you are always welcome on the main page, right?</p>
        <Link to={PATH[Page.Home]} className={styles.notFound__btn}>
          Back to Main
        </Link>
      </div>
    </div>
  );
}
