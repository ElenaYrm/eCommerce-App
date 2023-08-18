import { ReactElement } from 'react';

import styles from './button.module.scss';

interface IButtonProps {
  type: 'submit' | 'reset' | 'button';
  name: string;
}

function Button({ type, name }: IButtonProps): ReactElement {
  return (
    <button type={type} className={styles.btn}>
      {name}
    </button>
  );
}

export default Button;
