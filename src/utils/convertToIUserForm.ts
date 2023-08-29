import { IUserForm } from '../components/RegisterForm/UserForm/UserForm';
import { ITestUser } from '../constant';

export function convertToIUserForm(userData: ITestUser): IUserForm {
  const dateOfBirthSplitArr = userData.dateOfBirth.split('-');
  const result = {
    email: userData.email,
    password: userData.password,
    firstName: userData.firstName,
    lastName: userData.lastName,
    date: dateOfBirthSplitArr[2],
    month: dateOfBirthSplitArr[1],
    year: dateOfBirthSplitArr[0],
  };
  return result;
}
