export type TStatus = 'loading' | 'error' | 'success' | 'initial';

export interface INewUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string; // YYYY-MM-DD
}

export interface IUser extends INewUser {
  id: string;
  version: number;
  // addresses: IAddress[];
  // defaultShippingAddressId: string;
  // shippingAddressIds: string[];
  // defaultBillingAddressId: string;
  // billingAddressIds: string[];
  // isEmailVerified: boolean;
  // authenticationMode: 'Password' | 'ExternalAuth';
}
