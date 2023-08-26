import { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './button.module.scss';

interface IButtonProps {
  type: 'submit' | 'reset' | 'button';
  name: string;
  className?: string;
}

function Button({ type, name, className }: IButtonProps): ReactElement {
  return (
    <button type={type} className={classnames(styles.btn, className || '')}>
      {name}
    </button>
  );
}

export default Button;
