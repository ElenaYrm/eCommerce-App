import { ReactElement } from 'react';
import styles from './PasswordChecklist.module.scss';

export default function PasswordChecklist({ password }: { password: string }): ReactElement {
  const rules = [
    { rule: 'upper case letter (A—Z)', isValid: /[A-Z]/.test(password) },
    { rule: 'lower case letter (a—z)', isValid: /[a-z]/.test(password) },
    { rule: 'number (0—9)', isValid: /[0-9]/.test(password) },
    { rule: 'special character (!@#$%^&*)', isValid: /[!@#$%^&*]/.test(password) },
    { rule: 'min 8 characters long', isValid: password.length >= 8 },
  ];

  return (
    <div className={styles.checkItems}>
      <ul>
        {rules.map((rule, index) => (
          <li className={`${styles.checkItem} ${rule.isValid ? 'valid' : ''}`} key={index}>
            <span>{rule.rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
