import { FormikErrors } from 'formik';
import { emailValidate, passwordValidate } from './index.ts';
import { ILoginForm } from '../../components/LoginForm/LoginForm.tsx';

export function validateLoginForm(values: ILoginForm): FormikErrors<ILoginForm> {
  const error: FormikErrors<ILoginForm> = {};

  error.email = emailValidate(values.email);
  error.password = passwordValidate(values.password);

  if (!error.email && !error.password) return {};

  return error;
}
