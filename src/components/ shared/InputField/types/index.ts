import { FormikValues } from 'formik';
import { Input } from '../../../../types/enums';

export interface InputFieldProps {
  formik: FormikValues;
  name: Input;
  placeholder: string;
  className?: string;
}
