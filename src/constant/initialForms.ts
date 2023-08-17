import { IRegisterForm } from '../components/RegisterForm/types';
import { ILoginForm } from '../components/LoginForm/types';
import { Input } from '../types/enums';

export const initialRegisterForm: IRegisterForm = {
  user: {
    [Input.Email]: '',
    [Input.Password]: '',
    [Input.FirstName]: '',
    [Input.LastName]: '',
    [Input.Date]: '',
    [Input.Month]: '',
    [Input.Year]: '',
  },
  shipping: {
    [Input.Street]: '',
    [Input.Country]: 'US',
    [Input.PostalCode]: '',
    [Input.City]: '',
  },
  billing: {
    [Input.Street]: '',
    [Input.Country]: 'US',
    [Input.PostalCode]: '',
    [Input.City]: '',
  },
};

export const initialLoginForm: ILoginForm = {
  [Input.Email]: '',
  [Input.Password]: '',
};
