import { ChangeEvent } from 'react';
import { INewAddress } from '../../../types/interfaces';
import { FormikErrors, FormikTouched } from 'formik';

export interface IAddressForm {
  type: 'billing' | 'shipping';
  handleChange: (e?: ChangeEvent<HTMLInputElement>) => void;
  values: INewAddress;
  touched: FormikTouched<INewAddress> | undefined;
  errors: FormikErrors<INewAddress> | undefined;
  className?: string;
}

export interface IRegisterForm {
  shipping: INewAddress;
  billing: INewAddress;
}
