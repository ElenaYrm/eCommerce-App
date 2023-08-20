import { ReactElement } from 'react';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

export default function NotFound(): ReactElement {
  return (
    <div className={styles['not-found__container']}>
      <div className={styles.content}>
        <h2>Page not found (´•̥̥̥o•̥̥̥`)</h2>
        <p>That's sad... But you know you are always welcome on the main page, right?</p>
        <Link to={PATH[Page.Home]} className={styles.button__primary}>
          Back to Main
        </Link>
      </div>
    </div>
  );
}
