import { ReactElement } from 'react';
import { Button } from '../../../components/shared/Button';

import styles from './checkoutPopup.module.scss';

interface ICheckoutPopupProps {
  handleClosePopup: (state: boolean) => void;
}

function CheckoutPopup({ handleClosePopup }: ICheckoutPopupProps): ReactElement {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__content}>
        <h3 className={styles.popup__header}>You are awesome 😘😘😘</h3>
        <Button
          type="button"
          name="Yes, I am"
          className={styles.popup__button}
          handleClick={(): void => handleClosePopup(false)}
        />
      </div>
    </div>
  );
}

export default CheckoutPopup;
