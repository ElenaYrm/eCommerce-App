import styles from './LoginForm.module.scss';
import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import validate from '../../utils/validations.ts';
import { Input } from '../../types/enums';
import { IValidationErrors } from '../../types/interfaces';
import { initialValues } from './variables';

const LoginForm: React.FC = () => {
  return (
    <div className={styles.root}>
      <Formik
        initialValues={initialValues}
        validate={(values): IValidationErrors => validate(values)}
        onSubmit={(_, { setSubmitting }): void => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting, setFieldValue }): JSX.Element => (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className="visually-hidden" htmlFor={Input.Email}>
              {Input.Email}
            </label>
            <input
              className={`${styles.form__inputs}`}
              id={Input.Email}
              placeholder="Email"
              type="email"
              name={Input.Email}
              value={values[Input.Email]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                if (!e.target.value.includes(' ')) {
                  handleChange(e);
                }
              }}
            />
            <ErrorMessage name={Input.Email} component="div" />
            <div className={`${styles.form__passwordContainer} ${styles.passwordContainer}`}>
              <label className="visually-hidden" htmlFor={Input.Password}>
                {Input.Password}
              </label>
              <input
                className={`${styles.form__inputs} ${styles.form__inputs_coloredPassword}`}
                id={Input.Password}
                placeholder="Password"
                type={values.showPassword ? 'password' : 'text'}
                name={Input.Password}
                value={values[Input.Password]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
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
                aria-label={values.showPassword ? 'Show Password' : 'Hide Password'}
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
