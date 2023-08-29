import { Formik } from 'formik';
import { ReactElement } from 'react';
import { PasswordField } from '../../../shared/PasswordField';
import { Input } from '../../../../types/enums';
import { ITabsProps } from '../FirstTab/FirstTab';
import { Button } from '../../../shared/Button';
import styles from './thirdTab.module.scss';
import { initialLoginForm } from '../../../../constant';
import { ILoginForm } from '../../../LoginForm/LoginForm';

function ThirdTab({ isEditMode, setIsEditing }: ITabsProps): ReactElement {
  function handleSubmit(values: ILoginForm): void {
    console.log(values);
  }

  return (
    <div className={styles.root}>
      {!isEditMode ? (
        <div>
          <div>
            <div className={styles.root__label}>Password</div>
            <input className={styles.root__input} type="password" value="********" disabled />
          </div>
          <button className={styles.root__editBtn} type="button" onClick={(): void => setIsEditing(!isEditMode)}>
            Change password
          </button>
        </div>
      ) : (
        <Formik initialValues={initialLoginForm} onSubmit={handleSubmit} validateOnBlur={false}>
          {({ handleSubmit, errors, touched, setFieldTouched, values }): ReactElement => (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <>
                <PasswordField
                  fieldName={Input.Email}
                  placeholder="Password"
                  value={values.email}
                  error={errors?.email}
                  touched={touched?.email}
                  setFieldTouched={setFieldTouched}
                />
                <PasswordField
                  formName="register"
                  fieldName={Input.Password}
                  placeholder="New password"
                  value={values[Input.Password]}
                  error={errors?.[Input.Password]}
                  touched={touched?.[Input.Password]}
                  setFieldTouched={setFieldTouched}
                />
              </>

              {isEditMode ? <Button type="submit" name="Save changes" className={styles.form__button} /> : ''}
              {isEditMode ? (
                <button type="button" className={styles.rootEdit__closeBtn} onClick={(): void => setIsEditing(false)}>
                  {' '}
                  Close
                </button>
              ) : (
                ''
              )}
            </form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default ThirdTab;
