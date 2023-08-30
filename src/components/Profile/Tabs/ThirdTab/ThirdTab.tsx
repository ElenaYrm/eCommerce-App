import { Formik } from 'formik';
import { ReactElement } from 'react';
import { PasswordField } from '../../../shared/PasswordField';
import { Input } from '../../../../types/enums';
import { ITabsProps } from '../FirstTab/FirstTab';
import { Button } from '../../../shared/Button';
import styles from './thirdTab.module.scss';
import { initialChangePassord } from '../../../../constant';

export interface IChangePassword {
  password: string;
  newPassword: string;
}

function ThirdTab({ isEditMode, setIsEditing }: ITabsProps): ReactElement {
  function handleSubmit(values: IChangePassword): void {
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
        <Formik initialValues={initialChangePassord} onSubmit={handleSubmit} validateOnBlur={false}>
          {({ handleSubmit, errors, touched, setFieldTouched, values }): ReactElement => (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <>
                <PasswordField
                  fieldName={Input.Password}
                  placeholder="Password"
                  value={values.password}
                  error={errors?.password}
                  touched={touched?.password}
                  setFieldTouched={setFieldTouched}
                />
                <PasswordField
                  formName="register"
                  fieldName={Input.NewPassword}
                  placeholder="New password"
                  value={values[Input.NewPassword]}
                  error={errors?.[Input.NewPassword]}
                  touched={touched?.[Input.NewPassword]}
                  setFieldTouched={setFieldTouched}
                />
              </>

              {isEditMode && <Button type="submit" name="Save changes" className={styles.form__button} />}
              {isEditMode && (
                <button type="button" className={styles.rootEdit__closeBtn} onClick={(): void => setIsEditing(false)}>
                  Close
                </button>
              )}
            </form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default ThirdTab;
