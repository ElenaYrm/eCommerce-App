import { ReactElement, useState } from 'react';
import { FormikErrors, FormikHelpers, useFormik } from 'formik';
import { AddressForm } from './AddressForm';
import { validateAddresses } from '../../utils';
import { initialFormValues } from '../../constant';
import { useAppDispatch } from '../../store/store';
import { registerThunk } from '../../store/auth/thunks';
import { IRegisterForm } from './types';
import { INewAddress, INewUser } from '../../types/interfaces';

import styles from './registerForm.module.scss';

function RegisterForm(): ReactElement {
  const [isSameAddress, setIsSameAddress] = useState(true);
  const dispatch = useAppDispatch();
  function onSubmit(values: IRegisterForm, options: FormikHelpers<IRegisterForm>): void {
    const addresses: INewAddress[] = [
      {
        streetName: values.shipping.streetName,
        city: values.shipping.city,
        postalCode: values.shipping.postalCode,
        country: values.shipping.country,
      },
    ];
    if (!isSameAddress) {
      addresses.push({
        streetName: values.billing.streetName,
        city: values.billing.city,
        postalCode: values.billing.postalCode,
        country: values.billing.country,
      });
    }

    // change for data from user data form
    const newUser: INewUser = {
      email: 'dd55dddd@lll.com',
      password: 'lllll',
      firstName: 'ooo',
      lastName: 'jjjj',
      dateOfBirth: '2000-01-01',
      addresses,
    };

    dispatch(registerThunk(newUser));
    options.resetForm();
  }

  const registerForm = useFormik<IRegisterForm>({
    initialValues: initialFormValues,
    validate: (values): void | object | Promise<FormikErrors<IRegisterForm>> => {
      return validateAddresses(values, isSameAddress);
    },
    onSubmit,
  });
  const { handleChange, handleSubmit, values, touched, errors } = registerForm;

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <AddressForm
        type="shipping"
        handleChange={handleChange}
        values={values.shipping}
        touched={touched.shipping}
        errors={errors.shipping}
      />

      <label>
        <input
          type="checkbox"
          checked={isSameAddress}
          onChange={(): void => setIsSameAddress(!isSameAddress)}
          className={styles.form__checkbox}
        />
        <span>Use as a billing address</span>
      </label>

      {!isSameAddress && (
        <AddressForm
          type="billing"
          handleChange={handleChange}
          values={values.billing}
          touched={touched.billing}
          errors={errors.billing}
          className={styles.form__subform}
        />
      )}

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
