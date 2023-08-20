import { ChangeEvent, ReactElement } from 'react';
import classNames from 'classnames';
import { FormikErrors, FormikTouched } from 'formik';
import { InputField } from '../../shared/InputField';
import { SelectField } from '../../shared/SelectField';
import { PasswordField } from '../../shared/PasswordField';
import { Input } from '../../../types/enums';
import { dates, months, years } from '../../../constant';

import styles from './userForm.module.scss';

export interface IUserForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  date: string;
  month: string;
  year: string;
}
interface IUserFormProps {
  handleChange: (e?: ChangeEvent) => void;
  values: IUserForm;
  touched: FormikTouched<IUserForm> | undefined;
  errors: FormikErrors<IUserForm> | undefined;
  className?: string;
}

export default function UserForm({ handleChange, className, values, touched, errors }: IUserFormProps): ReactElement {
  return (
    <div className={classNames(styles.form__user, className)}>
      <InputField
        fieldName={`user.${Input.Email}`}
        type="text"
        placeholder="Email"
        value={values[Input.Email]}
        error={errors?.[Input.Email]}
        touched={touched?.[Input.Email]}
        handleChange={handleChange}
      />

      <PasswordField
        formName="register"
        fieldName={`user.${Input.Password}`}
        placeholder="Password"
        value={values[Input.Password]}
        error={errors?.[Input.Password]}
        touched={touched?.[Input.Password]}
        handleChange={handleChange}
      />

      <InputField
        fieldName={`user.${Input.FirstName}`}
        placeholder="First name"
        value={values[Input.FirstName]}
        error={errors?.[Input.FirstName]}
        touched={touched?.[Input.FirstName]}
        handleChange={handleChange}
      />

      <InputField
        fieldName={`user.${Input.LastName}`}
        placeholder="Last name"
        value={values[Input.LastName]}
        error={errors?.[Input.LastName]}
        touched={touched?.[Input.LastName]}
        handleChange={handleChange}
      />

      <div className={styles.selects__container}>
        <div className={styles.selects}>
          <SelectField
            handleChange={handleChange}
            value={values[Input.Date]}
            fieldName={`user.${Input.Date}`}
            options={dates}
            placeholder={Input.Date}
          />
          <SelectField
            handleChange={handleChange}
            value={values[Input.Month]}
            fieldName={`user.${Input.Month}`}
            options={months}
            placeholder={Input.Month}
          />
          <SelectField
            handleChange={handleChange}
            value={values[Input.Year]}
            fieldName={`user.${Input.Year}`}
            options={years}
            placeholder={Input.Year}
          />
        </div>

        {errors?.date && touched?.date ? <span className={styles.message__error}>{errors.date}</span> : null}
      </div>
    </div>
  );
}
