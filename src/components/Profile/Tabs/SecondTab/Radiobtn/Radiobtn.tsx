import classNames from 'classnames';
import styles from '../secondTab.module.scss';
import { ReactElement } from 'react';

interface IBtnProps {
  isShipping: boolean;
  setIsShipping: (value?: boolean) => void;
  value: string;
  label: string;
}

function Radiobtn({ isShipping, setIsShipping, value, label }: IBtnProps): ReactElement {
  return (
    <div className={classNames(styles.toggleShipping__btn, isShipping ? styles.toggleShipping__btn_active : '')}>
      <input
        className={styles.toggleShipping__radio}
        type="radio"
        value={value}
        name="addressType"
        checked={isShipping}
        onChange={(): void => setIsShipping(!isShipping)}
      />
      <label>{label}</label>
    </div>
  );
}

export default Radiobtn;
