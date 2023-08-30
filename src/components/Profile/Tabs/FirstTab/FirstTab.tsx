import styles from './firstTab.module.scss';

import { Formik, FormikErrors } from 'formik';
import { Input } from '../../../../types/enums';
import { InputField } from '../../../shared/InputField';
import { ReactElement } from 'react';
import { dateMYValidate, emailValidate, lastNameValidate, nameValidate } from '../../../../utils/validation';
import classNames from 'classnames';
import { ITestUser, testUser } from '../../../../constant';
import { IUser } from '../../../../types/interfaces';
import { UserDateOfBirth } from './UserDateOfBirth';
import { Button } from '../../../shared/Button';

export interface ITabsProps {
  isEditMode: boolean;

  setIsEditing: (isEditing: boolean) => void;
}

function FirstTab({ isEditMode, setIsEditing }: ITabsProps): ReactElement {
  // const dispatch = useAppDispatch();

  function handleSubmit(values: IUser): void {
    if (isEditMode) return;
    console.log(!isEditMode, values, 'hERER');

    // const user: UserAuthOptions = {
    //   username: values.email.trim(),
    //   password: values.password.trim(),
    // };

    // dispatch(loginThunk(user));
  }

  function validateDate(values: ITestUser): void | object | Promise<FormikErrors<ITestUser>> {
    console.log(values);
    const errors: FormikErrors<ITestUser> = {};
    errors[Input.Date] = dateMYValidate(`${values[Input.Date]}${values[Input.Month]}${values[Input.Year]}`);
    return errors;
  }

  return (
    <Formik initialValues={testUser} validate={validateDate} onSubmit={handleSubmit} validateOnBlur={false}>
      {({ handleSubmit, errors, touched, setFieldTouched, handleChange, resetForm }): ReactElement => (
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
              values={testUser}
              errors={errors}
              setFieldTouched={setFieldTouched}
            />
          ) : (
            <div className={styles.form__dateOfBirth}>{`${testUser.date} ${testUser.month} ${testUser.year}`}</div>
          )}
          {!isEditMode && <Button name="Edit  ( ´･ω･)" type="button" onClick={(): void => setIsEditing(!isEditMode)} />}
          {isEditMode && <Button name="Save changes" type="submit" />}
          {isEditMode && (
            <button
              type="button"
              className={styles.formEdit__closeBtn}
              onClick={(): void => {
                setIsEditing(false);
                resetForm();
              }}
            >
              Close
            </button>
          )}
        </form>
      )}
    </Formik>
  );
}

export default FirstTab;
