import styles from './UserForm.module.scss';
import { ReactElement } from 'react';
import { useFormik } from 'formik';
import { Input } from '../../types/enums';
import { PasswordChecklist } from './PasswordChecklist';
import validate from '../../utils/validations';

const currentYear = new Date().getFullYear();
export const years = Array(90)
  .fill('')
  .map((_, index) => `${currentYear - index}`);

export const dates = Array(31)
  .fill('')
  .map((_, index) => `${index + 1}`);

export const months = [
  'February',
  'January',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  date: '',
  month: '',
  year: '',
};

export default function UserForm(): ReactElement {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log('Submit:', values);
    },
    validate,
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
      {/* Email */}
      <div className={styles.formField}>
        <label htmlFor={Input.Email}>{Input.Email}</label>
        <input
          id={Input.Email}
          name={Input.Email}
          type="email"
          placeholder="Email"
          value={formik.values[Input.Email]}
          onChange={formik.handleChange}
          className={styles.formInput}
        />

        {formik.errors[Input.Email] && formik.touched[Input.Email] ? (
          <span className={styles.errorMessage}>{formik.errors[Input.Email]}</span>
        ) : null}
      </div>

      {/* Password */}
      <div className={styles.formField}>
        <label htmlFor={Input.Password}>{Input.Password}</label>
        <input
          id={Input.Password}
          name={Input.Password}
          type="password"
          placeholder="Password"
          value={formik.values[Input.Password]}
          onChange={formik.handleChange}
          className={styles.formInput}
        />

        {formik.errors[Input.Password] && formik.touched[Input.Password] ? (
          <span className={styles.errorMessage}>{formik.errors[Input.Password]}</span>
        ) : null}

        <PasswordChecklist password={formik.values[Input.Password]} />
      </div>

      {/* First name */}
      <div className={styles.formField}>
        <label htmlFor={Input.FirstName}>{Input.FirstName}</label>
        <input
          id={Input.FirstName}
          name={Input.FirstName}
          type="text"
          placeholder="First name"
          value={formik.values[Input.FirstName]}
          onChange={formik.handleChange}
          className={styles.formInput}
        />

        {formik.errors[Input.FirstName] && formik.touched[Input.FirstName] ? (
          <span className={styles.errorMessage}>{formik.errors[Input.FirstName]}</span>
        ) : null}
      </div>

      {/* Last name */}
      <div className={styles.formField}>
        <label htmlFor={Input.LastName}>{Input.LastName}</label>
        <input
          id={Input.LastName}
          name={Input.LastName}
          type="text"
          placeholder="Last name"
          value={formik.values[Input.LastName]}
          onChange={formik.handleChange}
          className={styles.formInput}
        />

        {formik.errors[Input.LastName] && formik.touched[Input.LastName] ? (
          <span className={styles.errorMessage}>{formik.errors[Input.LastName]}</span>
        ) : null}
      </div>

      <div className={styles.formField}>
        <div className={styles.selects}>
          {/* Date */}
          <div className={styles.formSelect}>
            <label htmlFor={Input.Date}>{Input.Date}</label>
            <select
              id={Input.Date}
              name={Input.Date}
              placeholder="Date"
              value={formik.values[Input.Date]}
              onChange={formik.handleChange}
            >
              <option value="" disabled>
                {Input.Date}
              </option>
              {dates.map((option) => (
                <option key={`${Input.Date}-${option}`} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Month */}
          <div className={styles.formSelect}>
            <label htmlFor={Input.Month}>{Input.Month}</label>
            <select
              id={Input.Month}
              name={Input.Month}
              value={formik.values[Input.Month]}
              onChange={formik.handleChange}
            >
              <option value="" disabled>
                {Input.Month}
              </option>
              {months.map((option) => (
                <option key={`${Input.Month}-${option}`} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div className={styles.formSelect}>
            <label htmlFor={Input.Year}>{Input.Year}</label>
            <select id={Input.Year} name={Input.Year} value={formik.values[Input.Year]} onChange={formik.handleChange}>
              <option value="" disabled>
                {Input.Year}
              </option>
              {years.map((option) => (
                <option key={`${Input.Year}-${option}`} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {formik.errors.date && formik.touched.date ? (
          <span className={styles.errorMessage}>{formik.errors.date}</span>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
