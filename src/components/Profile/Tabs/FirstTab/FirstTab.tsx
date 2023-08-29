import styles from './firstTab.module.scss';

import { Formik } from 'formik';
import { Input } from '../../../../types/enums';
import { InputField } from '../../../shared/InputField';
import { ReactElement, useRef } from 'react';
import { emailValidate, lastNameValidate, nameValidate } from '../../../../utils/validation';
// import { Button } from '../../../shared/Button';
import classNames from 'classnames';
import { testUser } from '../../../../constant';
import UserDateOfBirth from './UserDateOfBirth/UserDateOfBirth';
import { convertToIUserForm } from '../../../../utils/convertToIUserForm';
import { IUser } from '../../../../types/interfaces';

export interface ITabsProps {
  isEditMode: boolean;

  setIsEditing: (isEditing: boolean) => void;
}

function FirstTab({ isEditMode, setIsEditing }: ITabsProps): ReactElement {
  // const dispatch = useAppDispatch();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const customerDateOfBirth = convertToIUserForm(testUser);

  function handleSubmit(values: IUser): void {
    console.log(isEditMode);
    if (isEditMode) return;
    console.log(!isEditMode, values, 'hERER');
    //! Delete this after we'll set sdk userInfo ------from----
    if (values.firstName) {
      testUser.firstName = values.firstName;
    }
    //! ----to----

    if (closeBtnRef.current) {
      closeBtnRef.current.click();
      setIsEditing(false);
    }

    // const user: UserAuthOptions = {
    //   username: values.email.trim(),
    //   password: values.password.trim(),
    // };

    // dispatch(loginThunk(user));
  }

  return (
    <Formik initialValues={testUser} onSubmit={handleSubmit} validateOnBlur={false}>
      {({ handleSubmit, errors, touched, setFieldTouched, handleChange, dirty }): ReactElement => (
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
              values={customerDateOfBirth}
              errors={errors}
              setFieldTouched={setFieldTouched}
            />
          ) : (
            <div className={styles.form__dateOfBirth}>{testUser.dateOfBirth}</div>
          )}
          <button className={styles.form__btn} type="submit" onClick={(): void => setIsEditing(!isEditMode)}>
            {!isEditMode ? 'Edit  ( ´･ω･)' : 'Save changes'}
          </button>
          {/* {isEditMode ? <Button type="submit" name="Save changes" className={styles.formEdit__saveBtn} /> : ''} */}
          {isEditMode ? (
            <button
              type="button"
              className={styles.formEdit__closeBtn}
              disabled={dirty}
              onClick={(): void => setIsEditing(false)}
              ref={closeBtnRef}
            >
              {' '}
              Close
            </button>
          ) : (
            ''
          )}
        </form>
      )}
    </Formik>
  );
}

export default FirstTab;
