import { ReactElement } from 'react';

import styles from './errorMessage.module.scss';

interface IErrorMessageProps {
  text: string;
  className?: string;
}

function ErrorMessage({ text, className }: IErrorMessageProps): ReactElement {
  return <div className={`${styles.error} ${className}`}>{text}</div>;
}

export default ErrorMessage;
