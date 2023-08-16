import { ChangeEvent } from 'react';
import { FormikValues } from 'formik';
import { Input } from '../../../../types/enums';
import { IFormInputs } from '../../../../types/interfaces';

type InputType = 'text' | 'email' | 'password';

export interface DefaultInputProps {
  name: Input;
  type: InputType;
  placeholder: string;
}

export interface InputFieldProps extends DefaultInputProps {
  formik: FormikValues;
  className?: string;
}

export interface InputProps extends DefaultInputProps {
  values: IFormInputs;
  onChange: (e?: ChangeEvent<HTMLInputElement>) => void;
}
