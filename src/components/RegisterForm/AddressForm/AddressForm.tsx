import { ChangeEvent, ReactElement } from 'react';
import { Field, FormikErrors, FormikTouched } from 'formik';
import classNames from 'classnames';
import { InputField } from '../../shared/InputField';
import { SelectField } from '../../shared/SelectField';
import { Input } from '../../../types/enums';
import { INewAddress } from '../../../types/interfaces';
import { countries } from '../../../constant';
import { cityValidate, countryValidate, streetValidate, zipCodeValidate } from '../../../utils/validation';

import styles from './addressForm.module.scss';

export interface IAddressForm extends INewAddress {
  isDefault?: boolean;
}

interface IAddressFormProps {
  type: 'billing' | 'shipping';
  handleChange: (e?: ChangeEvent) => void;
  values: IAddressForm;
  touched: FormikTouched<IAddressForm> | undefined;
  errors: FormikErrors<IAddressForm> | undefined;
  setFieldTouched: (field: string, isTouched?: boolean | undefined) => void;
  className?: string;
  isDisabled?: boolean;
}

function AddressForm({
  type,
  values,
  errors,
  handleChange,
  touched,
  setFieldTouched,
  className,
  isDisabled,
}: IAddressFormProps): ReactElement {
  return (
    <div className={classNames(className, styles.address)}>
      <h3 className={styles.address__title}>{`${type[0].toUpperCase() + type.slice(1).toLowerCase()} address`}</h3>

      <InputField
        fieldName={`${type}.${Input.Street}`}
        error={errors?.[Input.Street]}
        touched={touched?.[Input.Street]}
        placeholder="Street"
        validate={streetValidate}
        setFieldTouched={setFieldTouched}
        isDisabled={isDisabled}
      />

      <InputField
        fieldName={`${type}.${Input.City}`}
        error={errors?.[Input.City]}
        touched={touched?.[Input.City]}
        placeholder="City"
        validate={cityValidate}
        setFieldTouched={setFieldTouched}
        isDisabled={isDisabled}
      />

      <div className={styles.address__select}>
        <SelectField
          handleChange={handleChange}
          value={values[Input.Country]}
          fieldName={`${type}.${Input.Country}`}
          options={countries}
          placeholder={'Country'}
          validate={countryValidate}
          isDisabled={isDisabled}
        />

        {errors?.[Input.Country] && touched?.[Input.Country] ? (
          <span className={styles.address__error}>{errors[Input.Country]}</span>
        ) : null}
      </div>

      <InputField
        fieldName={`${type}.${Input.PostalCode}`}
        error={errors?.[Input.PostalCode]}
        touched={touched?.[Input.PostalCode]}
        placeholder="Postal code"
        validate={zipCodeValidate}
        setFieldTouched={setFieldTouched}
        isDisabled={isDisabled}
      />

      <label className={styles.address__checkfield}>
        <Field
          name={`${type}.${Input.IsDefault}`}
          type="checkbox"
          checked={values[Input.IsDefault]}
          className={styles.address__checkbox}
          disabled={isDisabled}
        />
        <span>Use as default address</span>
      </label>
    </div>
  );
}

export default AddressForm;
