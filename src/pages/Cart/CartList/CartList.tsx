import { ReactElement } from 'react';

import styles from './cartList.module.scss';
import { Button } from '../../../components/shared/Button';

export default function CartList(): ReactElement {
  return (
    <ul className={styles.items__list}>
      <li className={styles.item}>
        <div className={styles.item__container}>
          <div className={styles.item__image}></div>
          <div className={styles.item__info}>
            <div className={styles.header}>
              <div className={styles.header__content}>
                <h4 className={styles.header__title}>Stainless steel and lacquer</h4>
                <h4 className={styles.header__artist}>Austin Lee</h4>
                <span className={styles.header__title}>$15,000</span>
              </div>
              <div className={styles.header__controls}>
                <Button type="button" name="-" className={styles.header__controls_button} />
                <span className={styles.header__controls_count}>1</span>
                <Button type="button" name="+" className={styles.header__controls_button} />
              </div>
            </div>
            <div className={styles.footer}>
              <Button type="button" name="Remove" className={styles.item__button_remove} />
              <div className={styles.footer__total}>$300,000</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
