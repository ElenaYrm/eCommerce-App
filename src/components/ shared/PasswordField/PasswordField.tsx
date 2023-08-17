import { ReactElement } from 'react';
import { FormikValues } from 'formik';
import { InputField } from '../InputField';
import { PasswordChecklist } from './PasswordChecklist';
import { Input } from '../../../types/enums';

export interface PasswordFieldProps {
  formik: FormikValues;
  formName: string;
}

export default function PasswordField({ formik, formName }: PasswordFieldProps): ReactElement {
  const password = formik.values[Input.Password];

  return (
    <>
      <InputField formik={formik} name={Input.Password} placeholder="Password" />
      {formName === 'register' && <PasswordChecklist password={password} />}
    </>
  );
}
