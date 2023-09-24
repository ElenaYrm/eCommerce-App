import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { getCurrentDate } from '../../utils';

import styles from './footer.module.scss';
import { SCHOOL_LINK } from '../../constant/aboutus';

export default function Footer(): ReactElement {
  const currentDate = getCurrentDate();

  return (
    <footer className={classnames(styles.footer)}>
      <div className={styles.footer__container}>
        <span>{currentDate} → You're here &#40;•ᴗ•&#41;</span>
        <Link to={SCHOOL_LINK} target="_blanc" className={styles.footer__link}>
          ©2023 RS School
        </Link>
      </div>
    </footer>
  );
}
