import { ReactElement, useState } from 'react';
import { Formik } from 'formik';
import { UserForm } from './UserForm';
import { IUserForm } from './UserForm/UserForm';
import { AddressForm } from './AddressForm';
import { Button } from '../shared/Button';
import { useAppDispatch } from '../../store/store';
import { registerThunk } from '../../store/auth/thunks';
import { initialRegisterForm } from '../../constant';
import { getMonthIndex } from '../../utils';
import { INewAddress, INewUser } from '../../types/interfaces';

import styles from './registerForm.module.scss';

export interface IRegisterForm {
  user: IUserForm;
  shipping: INewAddress;
  billing: INewAddress;
}

function RegisterForm(): ReactElement {
  const [isSameAddress, setIsSameAddress] = useState(true);

  const dispatch = useAppDispatch();
  function onSubmit(values: IRegisterForm): void {
    const { user, shipping, billing } = values;
    const addresses: INewAddress[] = [
      {
        streetName: shipping.streetName,
        city: shipping.city,
        postalCode: shipping.postalCode,
        country: shipping.country,
      },
    ];

    if (!isSameAddress) {
      addresses.push({
        streetName: billing.streetName,
        city: billing.city,
        postalCode: billing.postalCode,
        country: billing.country,
      });
    }

    const newUser: INewUser = {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: `${user.year}-${getMonthIndex(user.month)}-${user.date}`,
      addresses,
    };

    dispatch(registerThunk(newUser));
  }

  return (
    <Formik initialValues={initialRegisterForm} onSubmit={onSubmit}>
      {({ handleChange, handleSubmit, values, touched, setFieldTouched, errors }): ReactElement => (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <UserForm
            handleChange={handleChange}
            values={values.user}
            touched={touched.user}
            errors={errors.user}
            setFieldTouched={setFieldTouched}
          />

          <AddressForm
            type="shipping"
            handleChange={handleChange}
            values={values.shipping}
            touched={touched.shipping}
            errors={errors.shipping}
            setFieldTouched={setFieldTouched}
          />

          <label className={styles.checkbox__container}>
            <input
              type="checkbox"
              checked={isSameAddress}
              onChange={(): void => setIsSameAddress(!isSameAddress)}
              className={styles.checkbox}
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
              setFieldTouched={setFieldTouched}
            />
          )}

          <Button type="submit" name="Register ( ^ω^)" className={styles.button__primary} />
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
