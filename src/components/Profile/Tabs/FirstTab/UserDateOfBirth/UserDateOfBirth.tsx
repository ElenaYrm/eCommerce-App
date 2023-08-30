import { ReactElement } from 'react';
import { IUserFormProps } from '../../../../RegisterForm/UserForm/UserForm';
import styles from './UserDateOfBirth.module.scss';
import classNames from 'classnames';
import { SelectField } from '../../../../shared/SelectField';
import { Input } from '../../../../../types/enums';
import { dates, months, years } from '../../../../../constant';

function UserDateOfBirth({ handleChange, values, touched, errors }: IUserFormProps): ReactElement {
  const { date, month, year } = values;
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.selects}>
        <div className={styles.root__container}>
          <SelectField
            handleChange={handleChange}
            value={date}
            fieldName={Input.Date}
            options={dates}
            placeholder={Input.Date}
          />
          <SelectField
            handleChange={handleChange}
            value={month}
            fieldName={Input.Month}
            options={months}
            placeholder={Input.Month}
          />
          <SelectField
            handleChange={handleChange}
            value={year}
            fieldName={Input.Year}
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
