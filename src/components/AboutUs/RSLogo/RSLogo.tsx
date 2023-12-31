import { ReactElement } from 'react';
import RS_Logo from '../../../assets/icons/rs_logo.svg';

import styles from './rsLogo.module.scss';

const SCHOOL_LINK = 'https://rs.school';

function RSLogo(): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.root__link}>
        <a className={styles.link} href={SCHOOL_LINK} target="_blank">
          <div className={styles.shape}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className={styles.shape__item}></div>
            ))}
          </div>
          <RS_Logo />
        </a>
      </div>
    </div>
  );
}

export default RSLogo;
