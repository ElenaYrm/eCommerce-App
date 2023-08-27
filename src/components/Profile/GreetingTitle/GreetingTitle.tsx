import styles from './greetingTitle.module.scss';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { testUser } from '../../../constant';

function GreetingTitle(): ReactElement {
  return (
    <div className={classNames(styles.greeting)}>
      <div className={styles.greeting__ava}></div>
      <h2 className={styles.greeting__title}>Hello, {testUser.firstName}</h2>
      <p className={styles.greeting__subtitle}>Set your profile settings down below</p>
    </div>
  );
}

export default GreetingTitle;
