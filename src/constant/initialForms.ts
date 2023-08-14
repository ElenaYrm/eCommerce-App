import { IRegisterForm } from '../components/RegisterForm/types';
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
