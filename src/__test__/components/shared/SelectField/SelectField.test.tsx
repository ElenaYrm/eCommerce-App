import { render, screen, act } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { SelectField } from '../../../../components/shared/SelectField';

describe('SelectField shared component', () => {
  const handleChange = jest.fn();

  it('Should render SelectField component', () => {
    act(() => {
      render(
        <Formik initialValues={{ testField: '' }} onSubmit={(): void => {}}>
          {(): JSX.Element => (
            <Form>
              <SelectField
                value=""
                fieldName="test"
                options={['Option 1', 'Option 2']}
                placeholder="Select an option"
                handleChange={handleChange}
              />
            </Form>
          )}
        </Formik>,
      );
    });

    expect(screen.getByText('Select an option')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
