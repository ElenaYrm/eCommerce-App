import { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './button.module.scss';

interface IButtonProps {
  type: 'submit' | 'reset' | 'button';
  name: string;
  className?: string;
  handleClick?: () => void;
}

function Button({ type, name, className, handleClick }: IButtonProps): ReactElement {
  return (
    <button type={type} onClick={handleClick} className={classnames(styles.btn, className || '')}>
      {name}
    </button>
  );
}

export default Button;
