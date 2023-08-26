import styles from './firstTab.module.scss';

import { Formik } from 'formik';
import { Input } from '../../../../types/enums';
import { InputField } from '../../../shared/InputField';
import { ReactElement } from 'react';
import { testUser } from '../../../../pages/Profile/Profile';
// import { useAppDispatch } from '../../../store/store';
// import { UserAuthOptions } from '@commercetools/sdk-client-v2';
// import { loginThunk } from '../../../store/auth/thunks';
import { emailValidate, lastNameValidate, nameValidate } from '../../../../utils/validation';
import { Button } from '../../../shared/Button';
import classNames from 'classnames';

export interface ITabsProps {
  isEditMode: boolean;
}

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
      {({ handleSubmit, errors, touched, setFieldTouched }): ReactElement => (
        <form className={classNames(styles.form, { [styles.formEdit]: isEditMode })} onSubmit={handleSubmit} noValidate>
          <div
            className={classNames(styles.form__nameContainer, styles.nameContainer, {
              [styles.formEdit__nameContainer]: isEditMode,
            })}
          >
            <InputField
              className={styles.nameContainer__input}
              fieldName={Input.FirstName}
              placeholder="First name"
              error={errors?.[Input.FirstName]}
              touched={touched?.[Input.FirstName]}
              validate={nameValidate}
              setFieldTouched={setFieldTouched}
              isDisabled={!isEditMode}
            />
            <InputField
              className={styles.nameContainer__input}
              fieldName={Input.LastName}
              placeholder="Last name"
              error={errors?.[Input.LastName]}
              touched={touched?.[Input.LastName]}
              validate={lastNameValidate}
              setFieldTouched={setFieldTouched}
              isDisabled={!isEditMode}
            />
          </div>
          <InputField
            className={classNames(styles.form__email, { [styles.formEdit__email]: isEditMode })}
            fieldName={Input.Email}
            placeholder="Email"
            error={errors?.[Input.Email]}
            touched={touched?.[Input.Email]}
            validate={emailValidate}
            setFieldTouched={setFieldTouched}
            isDisabled={!isEditMode}
          />
          {isEditMode ? <Button type="submit" name="Save changes" className={styles.form__saveBtn} /> : ''}
        </form>
      )}
    </Formik>
  );
}

export default FirstTab;
