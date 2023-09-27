import styles from './editCard.module.scss';
import { ReactElement } from 'react';
import { Input } from '../../../../../../types/enums';
import { Formik } from 'formik';
import { Button } from '../../../../../shared/Button';
import { AddressForm } from '../../../../../RegisterForm/AddressForm';
import { Address } from '@commercetools/platform-sdk';
import { IAddressForm } from '../../../../../RegisterForm/AddressForm/AddressForm';
import { useSelector } from 'react-redux';
import { selectEditError, selectEditStatus, selectUserData } from '../../../../../../store/user/selectors';
import { useAppDispatch } from '../../../../../../store/store';
import { IUpdateUser } from '../../../../../../services/sdk/customer/types';
import { changeAddressThunk } from '../../../../../../store/user/thunks';
import { Loader } from '../../../../../shared/Loader';
import { Notice } from '../../../../../shared/Notice';

interface IEditInitialValue {
  shipping: IAddressForm;
  billing: IAddressForm;
}

interface IEditCard {
  values: Address;
  isShipping: boolean;
  addressId: string;
}

function EditCard({ values, isShipping, addressId }: IEditCard): ReactElement {
  const user = useSelector(selectUserData);
  const dispatch = useAppDispatch();
  const editError = useSelector(selectEditError);
  const status = useSelector(selectEditStatus);

  const initialValue: IEditInitialValue = {
    shipping: {
      [Input.Street]: values.streetName || '',
      [Input.Country]: values.country,
      [Input.PostalCode]: values.postalCode || '',
      [Input.City]: values.city || '',
    },
    billing: {
      [Input.Street]: values.streetName || '',
      [Input.Country]: values.country,
      [Input.PostalCode]: values.postalCode || '',
      [Input.City]: values.city || '',
    },
  };

  function handleSubmit(values: IEditInitialValue): void {
    const isShippingAddress = values.shipping.city !== '';
    const addNewAddressData: IUpdateUser = {
      id: user.id,
      version: user.version,
      action: [
        {
          action: 'changeAddress',
          addressId: addressId,
          address: {
            streetName: isShippingAddress ? values.shipping.streetName : values.billing.streetName,
            city: isShippingAddress ? values.shipping.city : values.billing.city,
            postalCode: isShippingAddress ? values.shipping.postalCode : values.billing.postalCode,
            country: isShippingAddress ? values.shipping.country : values.billing.country,
          },
        },
      ],
    };
    dispatch(changeAddressThunk(addNewAddressData));
  }

  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>Edit address</h3>
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
              className={styles.root__addressForm}
            />
            <Button
              className={styles.root__btn}
              type="submit"
              name={status === 'loading' ? <Loader type="points" /> : 'Save address'}
            />
          </form>
        )}
      </Formik>
      {editError && <Notice text="Something bad happened... Try again! (つω`｡)" type="error" />}
    </div>
  );
}

export default EditCard;
