import styles from './modalChildren.module.scss';
import { ReactElement } from 'react';
import { Input } from '../../../../../../types/enums';
import { Formik } from 'formik';
import { Button } from '../../../../../shared/Button';
import { AddressForm } from '../../../../../RegisterForm/AddressForm';
import { Address } from '@commercetools/platform-sdk';
import { IAddressForm } from '../../../../../RegisterForm/AddressForm/AddressForm';

interface IInitialValue {
  shipping: IAddressForm;
  billing: IAddressForm;
}

interface IModalChildren {
  values: Address;
  isShipping: boolean;
}

function ModalChildren({ values, isShipping }: IModalChildren): ReactElement {
  const initialValue: IInitialValue = {
    shipping: {
      [Input.Street]: values.streetName || '',
      [Input.Country]: values.country,
      [Input.PostalCode]: values.postalCode || '',
      [Input.City]: values.city || '',
      isDefault: true, //! Get True / False from array ID's
    },
    billing: {
      [Input.Street]: values.streetName || '',
      [Input.Country]: values.country,
      [Input.PostalCode]: values.postalCode || '',
      [Input.City]: values.city || '',
      isDefault: true, //! Get True / False from array ID's
    },
  };

  function handleSubmit(values: IInitialValue): void {
    console.log(values);
  }

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, setFieldTouched, touched, errors, values }): ReactElement => (
        <form className={styles.root__formContainer} onSubmit={handleSubmit} noValidate>
          <AddressForm
            type={isShipping ? 'shipping' : 'billing'}
            handleChange={handleChange}
            values={isShipping ? values.shipping : values.billing}
            touched={isShipping ? touched.shipping : touched.billing}
            errors={isShipping ? errors.shipping : errors.billing}
            setFieldTouched={setFieldTouched}
          />
          <Button type="submit" name="Save address" />
        </form>
      )}
    </Formik>
  );
}

export default ModalChildren;
