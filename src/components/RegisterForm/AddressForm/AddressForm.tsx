import { ChangeEvent, ReactElement } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import classNames from 'classnames';
import { InputField } from '../../shared/InputField';
import { SelectField } from '../../shared/SelectField';
import { Input } from '../../../types/enums';
import { INewAddress } from '../../../types/interfaces';
import { countries } from '../../../constant';

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

      <div className={styles.selects__container}>
        <SelectField
          handleChange={handleChange}
          value={values[Input.Country]}
          fieldName={`${type}.${Input.Country}`}
          options={countries}
          placeholder={'Country'}
        />

        {errors?.[Input.Country] && touched?.[Input.Country] ? (
          <span className={styles.message__error}>{errors[Input.Country]}</span>
        ) : null}
      </div>
    </div>
  );
}

export default AddressForm;
