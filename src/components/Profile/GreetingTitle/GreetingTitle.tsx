import styles from './greetingTitle.module.scss';
import classNames from 'classnames';
import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../store/user/selectors';
import { useAppDispatch } from '../../../store/store';
import { getUserThunk } from '../../../store/user/thunks';

function GreetingTitle(): ReactElement {
  const user = useSelector(selectUserData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.id) {
      dispatch(getUserThunk());
    }
  }, [user, dispatch]);
  return (
    <div className={classNames(styles.greeting)}>
      <div className={styles.greeting__ava}></div>
      <h2 className={styles.greeting__title}>Hello, {user.firstName}</h2>
      <p className={styles.greeting__subtitle}>Set your profile settings down below</p>
    </div>
  );
}

export default GreetingTitle;
