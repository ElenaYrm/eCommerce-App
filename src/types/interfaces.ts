import { Input } from './enums';

export interface IFormInputs {
  [key: string]: Input | string;
}

export interface IPassword {
  password: string;
}
