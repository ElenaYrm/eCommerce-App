import { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './button.module.scss';

interface IButtonProps {
  type: 'submit' | 'reset' | 'button';
  name: string;
  className?: string;
  onClick?: () => void;
}

const noop = (): void => {
  return;
};

function Button({ type, name, className, onClick = noop }: IButtonProps): ReactElement {
  return (
    <button type={type} className={classnames(styles.btn, className || '')} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
