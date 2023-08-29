import { Formik } from 'formik';
import { ReactElement } from 'react';
import { PasswordField } from '../../../shared/PasswordField';
import { Input } from '../../../../types/enums';
import { ITabsProps } from '../FirstTab/FirstTab';
import { Button } from '../../../shared/Button';
import styles from './thirdTab.module.scss';
import classNames from 'classnames';
import { initialLoginForm, testUser } from '../../../../constant';

function ThirdTab({ isEditMode, setIsEditing }: ITabsProps): ReactElement {
  function handleSubmit(): void {}

  return (
    <>
      <Formik initialValues={testUser} onSubmit={handleSubmit} validateOnBlur={false}>
        {({ handleSubmit, errors, touched, setFieldTouched, values }): ReactElement => (
          <form
            className={classNames(styles.root, { [styles.rootEdit]: isEditMode })}
            onSubmit={handleSubmit}
            noValidate
          >
            {isEditMode ? '' : <div className={styles.root__label}>Password</div>}
            <PasswordField
              className={classNames(styles.root__input, { [styles.rootEdit__input]: isEditMode })}
              fieldName={Input.Password}
              placeholder="Current password"
              value={values[Input.Password]}
              error={errors?.[Input.Password]}
              touched={touched?.[Input.Password]}
              setFieldTouched={setFieldTouched}
              isDisabled={!isEditMode}
            />
          </form>
        )}
      </Formik>

      <Formik initialValues={initialLoginForm} onSubmit={handleSubmit} validateOnBlur={false}>
        {({ handleSubmit, errors, touched, setFieldTouched, values, dirty }): ReactElement => (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {isEditMode ? (
              <>
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
            ) : (
              ''
            )}
            {isEditMode ? <Button type="submit" name="Save changes" className={styles.form__button} /> : ''}
            {isEditMode ? (
              <button
                type="button"
                className={styles.rootEdit__closeBtn}
                disabled={dirty}
                onClick={(): void => setIsEditing(false)}
              >
                {' '}
                Close
              </button>
            ) : (
              ''
            )}
          </form>
        )}
      </Formik>
    </>
  );
}

export default ThirdTab;
