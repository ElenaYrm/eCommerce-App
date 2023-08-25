import { ReactElement } from 'react';

import styles from './errorMessage.module.scss';

interface IErrorMessageProps {
  text: string;
}

function ErrorMessage({ text }: IErrorMessageProps): ReactElement {
  return <div className={styles.message__error}>{text}</div>;
}

export default ErrorMessage;
