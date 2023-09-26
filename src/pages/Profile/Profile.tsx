import styles from './profile.module.scss';
import { ReactElement, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { selectUserData, selectUserLoadingInfo } from '../../store/user/selectors';
import { getUserThunk } from '../../store/user/thunks';
import { Loader } from '../../components/shared/Loader';
import { ErrorMessage } from '../../components/shared/ErrorMessage';
import { Tabs } from '../../components/Profile/Tabs';
import { GreetingTitle } from '../../components/Profile/GreetingTitle';
import { selectIsAuthorized } from '../../store/auth/selectors';
import { PATH } from '../../router/constants/paths.ts';
import { Page } from '../../router/types';
import { useNavigate } from 'react-router-dom';
import { ModeContext } from '../../context/mode/ModeContext';

export default function Profile(): ReactElement {
  const navigate = useNavigate();

  const isAuthorized = useSelector(selectIsAuthorized);
  const user = useSelector(selectUserData);
  const { status, error } = useSelector(selectUserLoadingInfo);

  const { isEditMode } = useContext(ModeContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(PATH[Page.Login]);
    }

    if (!user.id) {
      dispatch(getUserThunk());
    }
  }, [user, dispatch, isAuthorized, navigate]);

  return (
    <div className={styles.main__container} data-testid="profile">
      <div className={styles.root}>
        {status === 'loading' && <Loader type="text" />}
        {error && <ErrorMessage text={error} />}

        {status === 'success' && !error && (
          <div className={styles.root__container}>
            {!isEditMode && <GreetingTitle />}
            <Tabs />
          </div>
        )}
      </div>
    </div>
  );
}
