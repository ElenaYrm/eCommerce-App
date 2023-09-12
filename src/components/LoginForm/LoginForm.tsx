import { ReactElement } from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { InputField } from '../shared/InputField';
import { PasswordField } from '../shared/PasswordField';
import { Button } from '../shared/Button';
import { anonLoginThunk, loginThunk } from '../../store/auth/thunks';
import { selectCart } from '../../store/cart/selectors';
import { useAppDispatch } from '../../store/store';
import { initialLoginForm } from '../../constant';
import { Input } from '../../types/enums';
import { emailValidate } from '../../utils/validation';

import styles from './loginForm.module.scss';

export interface ILoginForm {
  email: string;
  password: string;
}

function LoginForm(): ReactElement {
  const cart = useSelector(selectCart);
  const dispatch = useAppDispatch();

  function handleSubmit(values: ILoginForm): void {
    const user: UserAuthOptions = {
      username: values.email.trim(),
      password: values.password.trim(),
    };

    if (cart.id) {
      dispatch(anonLoginThunk(user));
    } else {
      dispatch(loginThunk(user));
    }
  }

  return (
    <Formik initialValues={initialLoginForm} onSubmit={handleSubmit} validateOnBlur={false}>
      {({ values, handleSubmit, errors, touched, setFieldTouched }): ReactElement => (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <InputField
            fieldName={Input.Email}
            placeholder="Email"
            error={errors?.[Input.Email]}
            touched={touched?.[Input.Email]}
            validate={emailValidate}
            setFieldTouched={setFieldTouched}
          />

          <PasswordField
            fieldName={Input.Password}
            placeholder="Password"
            value={values[Input.Password]}
            error={errors?.[Input.Password]}
            touched={touched?.[Input.Password]}
            setFieldTouched={setFieldTouched}
            className={styles.form__password}
          />

          <Button type="submit" name="Login ( ^ω^)" />
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
