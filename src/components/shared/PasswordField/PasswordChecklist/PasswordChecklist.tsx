import { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './passwordChecklist.module.scss';

interface IPasswordRule {
  rule: string;
  isValid: boolean;
}

interface IPasswordListProps {
  password: string;
}

export default function PasswordChecklist({ password }: IPasswordListProps): ReactElement {
  const rules: IPasswordRule[] = [
    { rule: 'lower case letter (a—z)', isValid: /[a-z]/.test(password) },
    { rule: 'upper case letter (A—Z)', isValid: /[A-Z]/.test(password) },
    { rule: 'number (0—9)', isValid: /[0-9]/.test(password) },
    { rule: 'special character (!@#$%^&*)', isValid: /[!@#$%^&*]/.test(password) },
    { rule: 'min 8 characters long', isValid: password.length >= 8 },
  ];

  return (
    <div className={styles.rules}>
      <ul>
        {rules.map((rule, index) => (
          <li className={classnames(styles.rules__item, rule.isValid ? styles.rules__item_valid : '')} key={index}>
            <span className={styles.rules__name}>{rule.rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
