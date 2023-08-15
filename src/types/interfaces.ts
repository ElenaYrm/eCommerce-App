import { FormikValues } from 'formik';
import { Input } from './enums';

export interface IValidationErrors {
  [key: string]: string;
}

export interface InputFieldProps {
  formik: FormikValues;
  field: Input;
  type: string;
  placeholder: string;
}

export interface SelectFieldProps {
  formik: FormikValues;
  field: Input;
  options: string[];
}
