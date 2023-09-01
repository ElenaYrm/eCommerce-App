import styles from './profile.module.scss';
import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { selectUserData, selectUserLoadingInfo } from '../../store/user/selectors';
import { getUserThunk } from '../../store/user/thunks';
import { Loader } from '../../components/shared/Loader';
import { ErrorMessage } from '../../components/shared/ErrorMessage';
import { Tabs } from '../../components/Profile/Tabs';
import { useIsEditMode } from './profileContext';
import { GreetingTitle } from '../../components/Profile/GreetingTitle';

export default function Profile(): ReactElement {
  const user = useSelector(selectUserData);
  const { status, error } = useSelector(selectUserLoadingInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.id) {
      dispatch(getUserThunk());
    }
  }, [user, dispatch]);

  const isEditMode = useIsEditMode();

  return (
    <>
      <div className={styles.root}>
        <div className={styles.root__container}>
          {!isEditMode && <GreetingTitle />}
          <Tabs />
        </div>
      </div>
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {status === 'loading' && <Loader />}
        {error && <ErrorMessage text={error} />}

        {status === 'success' && !error && <h1>Profile</h1>}
      </div>
    </>
  );
}
