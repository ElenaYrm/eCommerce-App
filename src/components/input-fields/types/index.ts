import { FormikValues } from 'formik';
import { Input } from '../../../types/enums';
import { ReactElement } from 'react';

export interface InputFieldProps {
  formik: FormikValues;
  fieldName: Input;
  type?: string;
  placeholder: string;
  className?: string;
  children?: ReactElement;
}

export interface PasswordFieldProps {
  formik: FormikValues;
  formName: string;
}

export interface SelectFieldProps {
  formik: FormikValues;
  fieldName: Input;
  options: string[];
  className?: string;
}
