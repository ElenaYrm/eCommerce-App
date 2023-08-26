import { Formik } from 'formik';
import { Input } from '../../../types/enums';
import { InputField } from '../../shared/InputField';
import { ReactElement } from 'react';
import { testUser } from '../../../pages/Profile/Profile';
// import { useAppDispatch } from '../../../store/store';
// import { UserAuthOptions } from '@commercetools/sdk-client-v2';
// import { loginThunk } from '../../../store/auth/thunks';
import { emailValidate, lastNameValidate, nameValidate } from '../../../utils/validation';
import { Button } from '../../shared/Button';

interface ITabsProps {
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
        <form className="testFormClass" onSubmit={handleSubmit} noValidate>
          <div>
            <InputField
              fieldName={Input.FirstName}
              placeholder="First name"
              error={errors?.[Input.FirstName]}
              touched={touched?.[Input.FirstName]}
              validate={nameValidate}
              setFieldTouched={setFieldTouched}
            />
            <InputField
              fieldName={Input.LastName}
              placeholder="Last name"
              error={errors?.[Input.LastName]}
              touched={touched?.[Input.LastName]}
              validate={lastNameValidate}
              setFieldTouched={setFieldTouched}
            />
          </div>
          <InputField
            fieldName={Input.Email}
            placeholder="Email"
            error={errors?.[Input.Email]}
            touched={touched?.[Input.Email]}
            validate={emailValidate}
            setFieldTouched={setFieldTouched}
          />
          {isEditMode ? <Button type="submit" name="Save changes" className="TESTINFIRSTTABBTN" /> : ''}
        </form>
      )}
    </Formik>
  );
}

export default FirstTab;
