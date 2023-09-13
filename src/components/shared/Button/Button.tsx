import { ReactElement, MouseEvent } from 'react';
import classnames from 'classnames';

import styles from './button.module.scss';

interface IButtonProps {
  type: 'submit' | 'reset' | 'button';
  name: string;
  className?: string;
  disabled?: boolean;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const noop = (): void => {
  return;
};

function Button({ type, name, className, handleClick = noop, disabled }: IButtonProps): ReactElement {
  return (
    <button
      type={type}
      className={classnames(styles.btn, className || '')}
      onClick={(event): void => handleClick(event)}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Button;
