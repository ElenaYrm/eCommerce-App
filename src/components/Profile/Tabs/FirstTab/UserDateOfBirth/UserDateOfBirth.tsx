import { ReactElement } from 'react';
import classNames from 'classnames';
import { IUserFormProps } from '../../../../RegisterForm/UserForm/UserForm';
import { SelectField } from '../../../../shared/SelectField';
import { Input } from '../../../../../types/enums';
import { dates, months, years } from '../../../../../constant';

import styles from './UserDateOfBirth.module.scss';

function UserDateOfBirth({ handleChange, values, errors, isDisabled }: IUserFormProps): ReactElement {
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
            isDisabled={isDisabled}
          />
          <SelectField
            handleChange={handleChange}
            value={month}
            fieldName={Input.Month}
            options={months}
            placeholder={Input.Month}
            isDisabled={isDisabled}
          />
          <SelectField
            handleChange={handleChange}
            value={year}
            fieldName={Input.Year}
            options={years}
            placeholder={Input.Year}
            isDisabled={isDisabled}
          />
        </div>
        {errors?.date ? <span className={styles.root__error}>{errors.date}</span> : null}
      </div>
    </div>
  );
}
export default UserDateOfBirth;
