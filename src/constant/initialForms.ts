import { IRegisterForm } from '../components/RegisterForm/RegisterForm';
import { ILoginForm } from '../components/LoginForm/LoginForm';
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
    [Input.Country]: '',
    [Input.PostalCode]: '',
    [Input.City]: '',
    [Input.IsDefault]: false,
  },
  billing: {
    [Input.Street]: '',
    [Input.Country]: '',
    [Input.PostalCode]: '',
    [Input.City]: '',
    [Input.IsDefault]: false,
  },
};

export const initialLoginForm: ILoginForm = {
  [Input.Email]: '',
  [Input.Password]: '',
};

export const testUser = {
  id: '428b7087-941c-4ef7-bd6f-59a15ef33867',
  version: 1,
  email: 'test@test.com',
  firstName: 'TestName',
  lastName: 'TestSurname',
  password: '**n8Y=',
  dateOfBirth: '2000-01-01',
  addresses: [
    {
      id: 'Mh7xBFOD',
      streetName: 'Shipping',
      postalCode: '11111',
      city: 'Ship',
      country: 'US',
    },
    {
      id: 'Y5zeShDz',
      streetName: 'Billing',
      postalCode: '22222',
      city: 'Bill',
      country: 'US',
    },
  ],
};
