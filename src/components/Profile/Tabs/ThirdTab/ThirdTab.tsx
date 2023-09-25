import { Formik } from 'formik';
import { ReactElement, useContext, useEffect } from 'react';
import { PasswordField } from '../../../shared/PasswordField';
import { Input } from '../../../../types/enums';
import { Button } from '../../../shared/Button';
import styles from './thirdTab.module.scss';
import { initialChangePassord } from '../../../../constant';
import { useSelector } from 'react-redux';
import { selectEditUserInfo, selectUserData } from '../../../../store/user/selectors';
import { useAppDispatch } from '../../../../store/store';
import { getUserThunk, updPasswordThunk } from '../../../../store/user/thunks';
import { IUpdPasswordData } from '../../../../store/user/types';
import { ErrorMessage } from '../../../shared/ErrorMessage';
import { deleteSuccessState, resetEditError } from '../../../../store/user/slice';
import { ModeContext } from '../../../../context/mode/ModeContext.ts';

export interface IChangePassword {
  password: string;
  newPassword: string;
}

function ThirdTab(): ReactElement {
  const { isEditMode, toggleEditMode } = useContext(ModeContext);
  const user = useSelector(selectUserData);
  const dispatch = useAppDispatch();
  const { editStatus, editError, isSuccess } = useSelector(selectEditUserInfo);

  useEffect(() => {
    if (!user.id) {
      dispatch(getUserThunk());
    }

    if (editStatus === 'success') {
      toggleEditMode();
      const timer = setTimeout(() => {
        dispatch(deleteSuccessState());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }

    if (editError) {
      const timer = setTimeout(() => {
        dispatch(resetEditError());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [user, dispatch, editStatus, editError]);

  function handleSubmit(values: IChangePassword): void {
    const updPassData: IUpdPasswordData = {
      email: user.email,
      passwordData: {
        id: user.id,
        version: user.version,
        currentPassword: values.password,
        newPassword: values.newPassword,
      },
    };
    dispatch(updPasswordThunk(updPassData));
  }

  return (
    <div className={styles.root}>
      {!isEditMode && (
        <div>
          <div>
            <div className={styles.root__label}>Password</div>
            <input className={styles.root__input} type="password" value="********" disabled />
          </div>
          <button className={styles.root__editBtn} type="button" onClick={toggleEditMode}>
            Change password
          </button>
          {isSuccess && (
            <div className={styles.successResponse}>Profile information was successfully updated ٩(｡•́‿•̀｡)۶</div>
          )}
        </div>
      )}
      {isEditMode && (
        <>
          <Formik initialValues={initialChangePassord} onSubmit={handleSubmit} validateOnBlur={false}>
            {({ handleSubmit, errors, touched, setFieldTouched, values }): ReactElement => (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <PasswordField
                  fieldName={Input.Password}
                  placeholder="Password"
                  value={values.password}
                  error={errors?.password}
                  touched={touched?.password}
                  setFieldTouched={setFieldTouched}
                  isDisabled={editStatus === 'loading'}
                />
                <PasswordField
                  formName="register"
                  fieldName={Input.NewPassword}
                  placeholder="New password"
                  value={values[Input.NewPassword]}
                  error={errors?.[Input.NewPassword]}
                  touched={touched?.[Input.NewPassword]}
                  setFieldTouched={setFieldTouched}
                  isDisabled={editStatus === 'loading'}
                />
                <Button
                  type="submit"
                  name={editStatus === 'loading' ? 'Loading...' : 'Save changes'}
                  className={styles.form__button}
                  disabled={editStatus === 'loading'}
                />
                <button type="button" className={styles.rootEdit__closeBtn} onClick={toggleEditMode}>
                  Close
                </button>
              </form>
            )}
          </Formik>
          {editError && (
            <ErrorMessage className={styles.errorResponse} text="Something bad happened... Try again! (つω`｡)" />
          )}
        </>
      )}
    </div>
  );
}

export default ThirdTab;
