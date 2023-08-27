import styles from './firstTab.module.scss';

import { Formik } from 'formik';
import { Input } from '../../../../types/enums';
import { InputField } from '../../../shared/InputField';
import { ReactElement } from 'react';
import { emailValidate, lastNameValidate, nameValidate } from '../../../../utils/validation';
import { Button } from '../../../shared/Button';
import classNames from 'classnames';
import { testUser } from '../../../../constant';
import UserDateOfBirth from './UserDateOfBirth/UserDateOfBirth';

export interface ITabsProps {
  isEditMode: boolean;
}

const TESTUSER = {
  email: 'test',
  password: 'test',
  firstName: 'test',
  lastName: 'test',
  date: '01',
  month: 'May',
  year: '2001',
};

function FirstTab({ isEditMode }: ITabsProps): ReactElement {
  // const dispatch = useAppDispatch();

  function handleSubmit(values: unknown): void {
    console.log(values);
    // const user: UserAuthOptions = {
    //   username: values.email.trim(),
    //   password: values.password.trim(),
    // };

    // dispatch(loginThunk(user));
  }

  return (
    <Formik initialValues={testUser} onSubmit={handleSubmit} validateOnBlur={false}>
      {({ handleSubmit, errors, touched, setFieldTouched, handleChange }): ReactElement => (
        <form className={classNames(styles.form, { [styles.formEdit]: isEditMode })} onSubmit={handleSubmit} noValidate>
          <InputField
            className={`${styles.form__input} ${isEditMode ? styles.formEdit__input : ''}`}
            placeholder="First name"
            error={errors?.[Input.FirstName]}
            touched={touched?.[Input.FirstName]}
            validate={nameValidate}
            setFieldTouched={setFieldTouched}
            isDisabled={!isEditMode}
            fieldName={Input.FirstName}
            labelText="Name"
            hideLabel={!isEditMode}
          />
          <InputField
            className={`${styles.form__input} ${isEditMode ? styles.formEdit__input : ''}`}
            placeholder="Last name"
            error={errors?.[Input.LastName]}
            touched={touched?.[Input.LastName]}
            validate={lastNameValidate}
            setFieldTouched={setFieldTouched}
            isDisabled={!isEditMode}
            fieldName={Input.LastName}
            labelText="Last name"
            hideLabel={!isEditMode}
          />
          <InputField
            className={classNames(
              styles.form__email,
              styles.form__input,
              { [styles.formEdit__email]: isEditMode },
              { [styles.formEdit__input]: isEditMode },
            )}
            placeholder="Email"
            error={errors?.[Input.Email]}
            touched={touched?.[Input.Email]}
            validate={emailValidate}
            setFieldTouched={setFieldTouched}
            isDisabled={!isEditMode}
            fieldName={Input.Email}
            labelText="Email"
            hideLabel={!isEditMode}
          />
          {isEditMode ? (
            <UserDateOfBirth
              touched={touched}
              handleChange={handleChange}
              values={TESTUSER}
              errors={errors}
              setFieldTouched={setFieldTouched}
            />
          ) : (
            <div className={styles.form__dateOfBirth}>{testUser.dateOfBirth}</div>
          )}
          {isEditMode ? <Button type="submit" name="Save changes" className={styles.formEdit__saveBtn} /> : ''}
        </form>
      )}
    </Formik>
  );
}

export default FirstTab;
