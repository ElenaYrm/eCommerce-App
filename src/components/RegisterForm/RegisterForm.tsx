import { ReactElement, useState } from 'react';
import { Formik, FormikErrors } from 'formik';
import { UserForm } from './UserForm';
import { IUserForm } from './UserForm/UserForm';
import { AddressForm } from './AddressForm';
import { IAddressForm } from './AddressForm/AddressForm';
import { Button } from '../shared/Button';
import { useAppDispatch } from '../../store/store';
import { registerThunk } from '../../store/auth/thunks';
import { initialRegisterForm } from '../../constant';
import { getMonthIndex } from '../../utils';
import { dateMYValidate } from '../../utils/validation';
import { INewAddress, INewUser } from '../../types/interfaces';
import { Input } from '../../types/enums';

import styles from './registerForm.module.scss';
import classnames from 'classnames';

export interface IRegisterForm {
  user: IUserForm;
  shipping: IAddressForm;
  billing: IAddressForm;
}

function RegisterForm(): ReactElement {
  const [isSameAddress, setIsSameAddress] = useState(true);

  const dispatch = useAppDispatch();
  function onSubmit(values: IRegisterForm): void {
    const { user, shipping, billing } = values;
    const addresses: INewAddress[] = [
      {
        streetName: shipping.streetName.trim(),
        city: shipping.city.trim(),
        postalCode: shipping.postalCode.trim(),
        country: shipping.country.trim(),
      },
    ];
    if (!isSameAddress) {
      addresses.push({
        streetName: billing.streetName.trim(),
        city: billing.city.trim(),
        postalCode: billing.postalCode.trim(),
        country: billing.country.trim(),
      });
    }

    const billingIndex: number = isSameAddress ? 0 : 1;
    let defaultBillIndex: number | undefined;
    if (isSameAddress) {
      defaultBillIndex = values.shipping.isDefault ? billingIndex : undefined;
    } else {
      defaultBillIndex = values.billing.isDefault ? billingIndex : undefined;
    }

    const newUser: INewUser = {
      email: user.email.trim(),
      password: user.password.trim(),
      firstName: user.firstName.trim(),
      lastName: user.lastName.trim(),
      dateOfBirth: `${user.year}-${getMonthIndex(user.month)}-${user.date}`,
      addresses,
      shippingAddresses: [0],
      defaultShippingAddress: values.shipping.isDefault ? 0 : undefined,
      billingAddresses: [billingIndex],
      defaultBillingAddress: defaultBillIndex,
    };

    dispatch(registerThunk(newUser));
  }

  function validateDate(values: IRegisterForm): void | object | Promise<FormikErrors<IRegisterForm>> {
    const errors: FormikErrors<IRegisterForm> = {};
    const user: Record<string, string> = {};

    user[Input.Date] = dateMYValidate(
      `${values.user[Input.Date]}${values.user[Input.Month]}${values.user[Input.Year]}`,
    );

    if (user[Input.Date]) {
      errors.user = user;
    }

    return errors;
  }

  return (
    <Formik initialValues={initialRegisterForm} validate={validateDate} onSubmit={onSubmit}>
      {({ handleChange, handleSubmit, values, touched, setFieldTouched, errors }): ReactElement => (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <UserForm
            handleChange={handleChange}
            values={values.user}
            touched={touched.user}
            errors={errors.user}
            setFieldTouched={setFieldTouched}
            className={styles.form__subform}
          />

          <AddressForm
            type="shipping"
            handleChange={handleChange}
            values={values.shipping}
            touched={touched.shipping}
            errors={errors.shipping}
            setFieldTouched={setFieldTouched}
          />

          <label className={classnames(styles.form__checkfield, styles.form__subform)}>
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
              setFieldTouched={setFieldTouched}
              className={styles.form__subform}
            />
          )}

          <Button type="submit" name="Register ( ^ω^)" />
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
