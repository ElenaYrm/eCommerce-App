import { IRegisterForm } from '../components/RegisterForm/RegisterForm';
import { ILoginForm } from '../components/LoginForm/LoginForm';
import { Input } from '../types/enums';
import { IChangePassword } from '../components/Profile/Tabs/ThirdTab/ThirdTab';

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

export const initialChangePassord: IChangePassword = {
  [Input.Password]: '',
  [Input.NewPassword]: '',
};

export interface IAddress {
  id: string;
  streetName: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface ITestUser {
  id: string;
  version: number;
  email: string;
  firstName: string;
  lastName: string;
  date: string;
  month: string;
  year: string;
  password: string;
  dateOfBirth: string;
  defaultShippingAddressId: string;
  defaultBillingAddressId: string;
  shippingAddressIds: string[];
  billingAddressIds: string[];
  addresses: IAddress[];
}

export const testUser: ITestUser = {
  id: '428b7087-941c-4ef7-bd6f-59a15ef33867',
  version: 1,
  email: 'test@test.com',
  firstName: 'TestName',
  lastName: 'TestSurname',
  password: '**n8Y=',
  date: '01',
  month: '05',
  year: '2001',
  dateOfBirth: '',
  defaultShippingAddressId: 'Mh7xBFOD',
  defaultBillingAddressId: 'Y5zeShDz',
  shippingAddressIds: ['Mh7xBFOD'],
  billingAddressIds: ['Y5zeShDz'],
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
    {
      id: '213131',
      streetName: 'Test',
      postalCode: '22334',
      city: 'TestCity',
      country: 'US',
    },
  ],
};

export const initialEditAddresses = {
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
