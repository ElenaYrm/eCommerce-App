import { ReactElement } from 'react';
import { getCurrentDate } from '../../utils/getCurrentDate';
import { Link } from 'react-router-dom';

import styles from './footer.module.scss';
import classnames from 'classnames';

const SCHOOL_URL = 'https://rs.school/';

export default function Footer(): ReactElement {
  const currentDate = getCurrentDate();

  return (
    <footer className={classnames(styles.footer, 'container')}>
      <div className={styles.footer__container}>
        <span>{currentDate} → You're here &#40;•ᴗ•&#41;</span>
        <Link to={SCHOOL_URL}>©2023 RS School</Link>
      </div>
    </footer>
  );
}
