import { ReactElement } from 'react';
import { IUserFormProps } from '../../../../RegisterForm/UserForm/UserForm';
import styles from './UserDateOfBirth.module.scss';
import classNames from 'classnames';
import { SelectField } from '../../../../shared/SelectField';
import { Input } from '../../../../../types/enums';
import { dates, months, years } from '../../../../../constant';

function UserDateOfBirth({ handleChange, values, touched, errors }: IUserFormProps): ReactElement {
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.selects}>
        <div className={styles.root__container}>
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

        {errors?.date && touched?.date ? <span className={styles.selects__error}>{errors.date}</span> : null}
      </div>
    </div>
  );
}
export default UserDateOfBirth;
