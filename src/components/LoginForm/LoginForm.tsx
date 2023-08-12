import styles from './LoginForm.module.scss';
import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import validate from '../../utils/validations';
import { Input } from '../../types/enums';
import { IValidationErrors } from '../../types/interfaces';
import { initialValues } from './variables';

const LoginForm: React.FC = () => {
  return (
    <div className={styles.root}>
      <Formik
        initialValues={initialValues}
        validate={(values): IValidationErrors => validate(values)}
        onSubmit={(values, { setSubmitting }): void => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }): JSX.Element => (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div>
              <input
                className={`${styles.form__inputs}`}
                placeholder="Email"
                type="email"
                name={Input.Email}
                value={values[Input.Email]}
                onChange={(e): void => {
                  if (!e.target.value.includes(' ')) {
                    handleChange(e);
                  }
                }}
              />
            </div>
            <ErrorMessage name={Input.Email} component="div" />
            <div className={`${styles.form__passwordContainer} ${styles.passwordContainer}`}>
              <input
                className={`${styles.form__inputs} ${styles.form__inputs_coloredPassword}`}
                placeholder="Password"
                type={values.showPassword ? 'password' : 'text'}
                name={Input.Password}
                value={values[Input.Password]}
                onChange={(e): void => {
                  if (!e.target.value.includes(' ')) {
                    handleChange(e);
                  }
                }}
              />
              <button
                className={styles.form__passwordContainer__showBtn}
                type="button"
                onClick={(): void => {
                  setFieldValue('showPassword', !values.showPassword);
                }}
              >
                {values.showPassword ? 'Show' : 'Hide'}
              </button>
            </div>
            <ErrorMessage name={Input.Password} component="div" />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
