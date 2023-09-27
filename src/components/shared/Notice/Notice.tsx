import { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './notice.module.scss';

interface IErrorMessageProps {
  text: string;
  type: 'error' | 'success' | 'text';
  className?: string;
}

function Notice({ text, className, type }: IErrorMessageProps): ReactElement {
  return <div className={classnames({ [styles[type]]: true }, className)}>{text}</div>;
}

export default Notice;
