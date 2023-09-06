import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import InputField, { InputFieldProps } from './InputField';

describe('Test InputField shared component', () => {
  function renderInputField(props: InputFieldProps): HTMLInputElement {
    render(
      <Formik initialValues={{}} onSubmit={(): void => {}}>
        {(): JSX.Element => <InputField {...props} />}
      </Formik>,
    );
    const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement;
    return inputElement;
  }

  test('Should renders correctly with no error', () => {
    const props = {
      fieldName: 'testField',
      placeholder: 'Enter text',
      type: 'text',
      error: undefined,
      touched: false,
      validate: (): string => '',
      setFieldTouched: jest.fn(),
    };

    renderInputField(props);
  });

  test('Should renders error message when error and touched are true', () => {
    const props = {
      fieldName: 'testField',
      placeholder: 'Enter text',
      type: 'text',
      error: 'This is an error message',
      touched: true,
      validate: (): string => '',
      setFieldTouched: jest.fn(),
    };

    const inputElement = renderInputField(props);
    expect(inputElement).toBeInTheDocument();

    const errorMessageElement = screen.getByText('This is an error message');
    expect(errorMessageElement).toBeInTheDocument();
  });
});
