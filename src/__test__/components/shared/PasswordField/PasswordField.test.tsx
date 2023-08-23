import { render } from '@testing-library/react';
import { Formik } from 'formik';
import { PasswordField } from '../../../../components/shared/PasswordField';

describe('PasswordField shared component', () => {
  test('Should renders correctly', () => {
    render(
      <Formik initialValues={{ password: '' }} onSubmit={(): void => {}}>
        {(formikProps): JSX.Element => (
          <PasswordField
            fieldName="password"
            placeholder="Enter password"
            value={formikProps.values.password}
            error={formikProps.errors.password}
            touched={formikProps.touched.password}
            setFieldTouched={formikProps.setFieldTouched}
          />
        )}
      </Formik>,
    );
  });
});
