import { FormikValues } from 'formik';
import { Input } from '../../../../types/enums';

export interface SelectFieldProps {
  formik: FormikValues;
  name: Input;
  options: string[];
}
