import styles from './rsLogo.module.scss';
import { ReactElement } from 'react';

function RSLogo(): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.root__btnContainer}>
        <div className={styles.root__circle}></div>
        <div className={styles.root__circle}></div>
        <div className={styles.root__circle}></div>
        <div className={styles.root__circle}></div>
        <div className={styles.root__circle}></div>
        <div className={styles.root__circle}></div>
        <div className={styles.root__circle}></div>
        <div className={styles.root__circle}></div>
        {/* "https://rs.school/" */}
        <a className={styles.root__link} href="#">
          R S SCHOOL
        </a>
      </div>
    </div>
  );
}

export default RSLogo;
