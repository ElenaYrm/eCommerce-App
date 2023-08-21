import { ChangeEvent, ReactElement } from 'react';
import classNames from 'classnames';
import { FormikErrors, FormikTouched } from 'formik';
import { InputField } from '../../shared/InputField';
import { SelectField } from '../../shared/SelectField';
import { PasswordField } from '../../shared/PasswordField';
import { Input } from '../../../types/enums';
import { dates, months, years } from '../../../constant';
import { dateMYValidate, emailValidate, lastNameValidate, nameValidate } from '../../../utils/validation';

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
  setFieldTouched: (field: string, isTouched?: boolean | undefined) => void;
  className?: string;
}

export default function UserForm({
  handleChange,
  className,
  values,
  touched,
  setFieldTouched,
  errors,
}: IUserFormProps): ReactElement {
  function validateDate(): string {
    return dateMYValidate(`${values[Input.Date]}${values[Input.Month]}${values[Input.Year]}`);
  }

  return (
    <div className={classNames(styles.form__user, className)}>
      <InputField
        fieldName={`user.${Input.Email}`}
        placeholder="Email"
        error={errors?.[Input.Email]}
        touched={touched?.[Input.Email]}
        validate={emailValidate}
        setFieldTouched={setFieldTouched}
      />

      <PasswordField
        formName="register"
        fieldName={`user.${Input.Password}`}
        placeholder="Password"
        value={values[Input.Password]}
        error={errors?.[Input.Password]}
        touched={touched?.[Input.Password]}
        setFieldTouched={setFieldTouched}
      />

      <InputField
        fieldName={`user.${Input.FirstName}`}
        placeholder="First name"
        error={errors?.[Input.FirstName]}
        touched={touched?.[Input.FirstName]}
        validate={nameValidate}
        setFieldTouched={setFieldTouched}
      />

      <InputField
        fieldName={`user.${Input.LastName}`}
        placeholder="Last name"
        error={errors?.[Input.LastName]}
        touched={touched?.[Input.LastName]}
        validate={lastNameValidate}
        setFieldTouched={setFieldTouched}
      />

      <div className={styles.selects__container}>
        <div className={styles.selects}>
          <SelectField
            handleChange={handleChange}
            value={values[Input.Date]}
            fieldName={`user.${Input.Date}`}
            options={dates}
            placeholder={Input.Date}
            validate={validateDate}
          />
          <SelectField
            handleChange={handleChange}
            value={values[Input.Month]}
            fieldName={`user.${Input.Month}`}
            options={months}
            placeholder={Input.Month}
            validate={validateDate}
          />
          <SelectField
            handleChange={handleChange}
            value={values[Input.Year]}
            fieldName={`user.${Input.Year}`}
            options={years}
            placeholder={Input.Year}
            validate={validateDate}
          />
        </div>

        {errors?.date || errors?.month || errors?.year ? (
          <span className={styles.message__error}>{errors.date || errors.month || errors.year}</span>
        ) : null}
      </div>
    </div>
  );
}
