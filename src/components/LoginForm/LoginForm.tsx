import { ReactElement } from 'react';
import { Formik } from 'formik';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { InputField } from '../shared/InputField';
import { PasswordField } from '../shared/PasswordField';
import { Button } from '../shared/Button';
import { loginThunk } from '../../store/auth/thunks';
import { useAppDispatch } from '../../store/store';
import { initialLoginForm } from '../../constant';
import { Input } from '../../types/enums';
import { validateLoginForm } from '../../utils';

import styles from './loginForm.module.scss';

export interface ILoginForm {
  email: string;
  password: string;
}

function LoginForm(): ReactElement {
  const dispatch = useAppDispatch();

  function handleSubmit(values: ILoginForm): void {
    const user: UserAuthOptions = {
      username: values.email,
      password: values.password,
    };

    dispatch(loginThunk(user));
  }

  return (
    <Formik initialValues={initialLoginForm} validate={validateLoginForm} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit, errors, touched }): ReactElement => (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <InputField
            fieldName={Input.Email}
            type="text"
            placeholder="Email"
            value={values[Input.Email]}
            error={errors?.[Input.Email]}
            touched={touched?.[Input.Email]}
            handleChange={handleChange}
          />

          <PasswordField
            fieldName={Input.Password}
            placeholder="Password"
            value={values[Input.Password]}
            error={errors?.[Input.Password]}
            touched={touched?.[Input.Password]}
            handleChange={handleChange}
          />

          <Button type="submit" name="Login ( ^ω^)" className={styles.button__primary} />
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
