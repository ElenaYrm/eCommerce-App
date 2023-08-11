import styles from './LoginForm.module.scss';
import React from 'react';
import { Formik } from 'formik';
import { ValidatableElements } from '../../types/enums';
import validate from '../../utils/validations';

type InputsValues = {
  email: string;
  password: string;
};
type ErrorsText = {
  email?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const [hasAnError, setShowErrors] = React.useState(false);
  const [errorsText, setErrorsText] = React.useState<ErrorsText>({});
  function customHandleSubmit(inputsValues: InputsValues): void {
    const hasErrors = hasValidationErrors(inputsValues);
    if (hasErrors) {
      setShowErrors(true);
      return;
    }

    // !change to: send form (SDK or Axios) add showErrors from (SDK or Axios)
    setShowErrors(false);
    alert(JSON.stringify(inputsValues, null, 2));
  }

  function disableWhitespaceCharacters(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === ' ') {
      e.preventDefault();
    }
  }

  function hasValidationErrors(inputsValues: InputsValues): boolean {
    const emailError = validate(ValidatableElements.Email, inputsValues.email);
    const passwordError = validate(ValidatableElements.PasswordLogin, inputsValues.password);
    setErrorsText((prevErrorsText) => ({
      ...prevErrorsText,
      email: emailError.email,
    }));
    setErrorsText((prevErrorsText) => ({
      ...prevErrorsText,
      password: passwordError.passwordLogin,
    }));

    const hasEmailError = 'email' in emailError;
    const hasPasswordError = 'passwordLogin' in passwordError;
    const hasAnyError = hasEmailError || hasPasswordError;
    return hasAnyError;
  }

  function clearError(inputsValues: InputsValues): void {
    const hasAnyError = hasValidationErrors(inputsValues);

    if (!hasAnyError) {
      setShowErrors(false);
    }
  }

  return (
    <div className={styles.root}>
      <Formik
        initialValues={{ email: '', password: '', showPassword: false }}
        onSubmit={(values, { setSubmitting }): void => {
          customHandleSubmit(values);
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
                name="email"
                onChange={(e): void => {
                  handleChange(e);
                  clearError({ ...values, email: e.target.value });
                }}
                value={values.email}
                onKeyPress={disableWhitespaceCharacters}
              />
            </div>
            {errorsText.email && (
              <div className={`${styles.form__errorText} ${hasAnError ? styles.form__errorText_showErr : ''}`}>
                {errorsText.email}
              </div>
            )}
            <div className={`${styles.form__passwordContainer} ${styles.passwordContainer}`}>
              <input
                className={`${styles.form__inputs}`}
                placeholder="Password"
                type={values.showPassword ? 'text' : 'password'}
                name="password"
                onChange={(e): void => {
                  handleChange(e);
                  clearError({ ...values, password: e.target.value });
                }}
                onKeyPress={disableWhitespaceCharacters}
                value={values.password}
                onFocus={(e): void => e.target.classList.add(styles.form__inputs_coloredPassword)}
                onBlur={(e): void => e.target.classList.remove(styles.form__inputs_coloredPassword)}
              />
              <button
                className={styles.form__passwordContainer__showBtn}
                type="button"
                onClick={(): void => {
                  setFieldValue('showPassword', !values.showPassword);
                }}
              >
                {values.showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errorsText.password && (
              <div className={`${styles.form__errorText} ${hasAnError ? styles.form__errorText_showErr : ''}`}>
                {errorsText.password}
              </div>
            )}
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
