import { ChangeEvent, ReactElement } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import classNames from 'classnames';
import { InputField } from '../../shared/InputField';
import { Input } from '../../../types/enums';
import { INewAddress } from '../../../types/interfaces';

import styles from './addressForm.module.scss';

interface IAddressFormProps {
  type: 'billing' | 'shipping';
  handleChange: (e?: ChangeEvent) => void;
  values: INewAddress;
  touched: FormikTouched<INewAddress> | undefined;
  errors: FormikErrors<INewAddress> | undefined;
  className?: string;
}

function AddressForm({ type, values, errors, handleChange, touched, className }: IAddressFormProps): ReactElement {
  return (
    <div className={classNames(className, styles.form__address)}>
      <h3>{`${type[0].toUpperCase() + type.slice(1).toLowerCase()} address`}</h3>

      <InputField
        fieldName={`${type}.${Input.Street}`}
        value={values[Input.Street]}
        error={errors?.[Input.Street]}
        touched={touched?.[Input.Street]}
        handleChange={handleChange}
        placeholder="Street"
      />

      <InputField
        fieldName={`${type}.${Input.City}`}
        value={values[Input.City]}
        error={errors?.[Input.City]}
        touched={touched?.[Input.City]}
        handleChange={handleChange}
        placeholder="City"
      />

      <InputField
        fieldName={`${type}.${Input.PostalCode}`}
        value={values[Input.PostalCode]}
        error={errors?.[Input.PostalCode]}
        touched={touched?.[Input.PostalCode]}
        handleChange={handleChange}
        placeholder="Postal code"
      />

      <InputField
        fieldName={`${type}.${Input.Country}`}
        value={values[Input.Country]}
        error={errors?.[Input.Country]}
        touched={touched?.[Input.Country]}
        handleChange={handleChange}
        placeholder="Country"
        disabled
      />
    </div>
  );
}

export default AddressForm;
