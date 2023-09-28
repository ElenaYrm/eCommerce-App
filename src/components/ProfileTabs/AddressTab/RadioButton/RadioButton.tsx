import classNames from 'classnames';
import styles from '../addressTab.module.scss';
import { ReactElement } from 'react';

interface IBtnProps {
  isShipping: boolean;
  setIsShipping: (value?: boolean) => void;
  value: string;
  label: string;
  callback: () => void;
}

function RadioButton({ isShipping, setIsShipping, value, label, callback }: IBtnProps): ReactElement {
  const hasActiveClass = isShipping ? styles.toggleShipping__btn_active : '';

  const handleRadioChange = (): void => {
    if (!hasActiveClass) {
      setIsShipping(!isShipping);
      if (callback) {
        callback();
      }
    }
  };

  return (
    <div className={classNames(styles.toggleShipping__btn, isShipping ? styles.toggleShipping__btn_active : '')}>
      <input
        id={label}
        className={styles.toggleShipping__radio}
        type="radio"
        value={value}
        name="addressType"
        checked={isShipping}
        onChange={(): void => setIsShipping(!isShipping)}
        onClick={handleRadioChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default RadioButton;
