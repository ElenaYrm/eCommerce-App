import { IRegisterForm } from '../components/RegisterForm/types';
import { IFormInputs } from '../types/interfaces';

export const initialFormValues: IRegisterForm = {
  shipping: {
    streetName: '',
    country: 'US',
    postalCode: '',
    city: '',
  },
  billing: {
    streetName: '',
    country: 'US',
    postalCode: '',
    city: '',
  },
};

export const initialUserValues: IFormInputs = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  date: '',
  month: '',
  year: '',
};
