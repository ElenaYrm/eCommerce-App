import { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './button.module.scss';

interface IButtonProps {
  type: 'submit' | 'reset' | 'button';
  name: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const noop = (): void => {
  return;
};

function Button({ type, name, className, onClick = noop, disabled }: IButtonProps): ReactElement {
  return (
    <button type={type} className={classnames(styles.btn, className || '')} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
}

export default Button;
