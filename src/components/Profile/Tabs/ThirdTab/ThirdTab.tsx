import { Formik } from 'formik';
import { ReactElement } from 'react';
import { testUser } from '../../../../pages/Profile/Profile';
import { PasswordField } from '../../../shared/PasswordField';
import { Input } from '../../../../types/enums';
import { ITabsProps } from '../FirstTab/FirstTab';
import { Button } from '../../../shared/Button';

function ThirdTab({ isEditMode }: ITabsProps): ReactElement {
  function handleSubmit(): void {}

  return (
    <>
      <Formik initialValues={testUser} onSubmit={handleSubmit} validateOnBlur={false}>
        {({ handleSubmit, errors, touched, setFieldTouched }): ReactElement => (
          <form className="testFormClass" onSubmit={handleSubmit} noValidate>
            <PasswordField
              fieldName={Input.Password}
              placeholder="Current password"
              value={testUser.password}
              error={errors?.[Input.Password]}
              touched={touched?.[Input.Password]}
              setFieldTouched={setFieldTouched}
            />
          </form>
        )}
      </Formik>
      <Formik initialValues={testUser} onSubmit={handleSubmit} validateOnBlur={false}>
        {({ handleSubmit, errors, touched, setFieldTouched, values }): ReactElement => (
          <form className="testFormClass" onSubmit={handleSubmit} noValidate>
            {isEditMode ? (
              <PasswordField
                formName="register"
                fieldName={Input.Password}
                placeholder="New password"
                value={values[Input.Password]}
                error={errors?.[Input.Password]}
                touched={touched?.[Input.Password]}
                setFieldTouched={setFieldTouched}
              />
            ) : (
              ''
            )}
            {isEditMode ? <Button type="submit" name="Save changes" className="TESTINFIRSTTABBTN" /> : ''}
          </form>
        )}
      </Formik>
    </>
  );
}

export default ThirdTab;
