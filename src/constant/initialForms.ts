import { IRegisterForm } from '../components/RegisterForm/RegisterForm';
import { ILoginForm } from '../components/LoginForm/LoginForm';
import { Input } from '../types/enums';
import { IChangePassword } from '../components/ProfileTabs/PasswordTab/PasswordTab.tsx';

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
