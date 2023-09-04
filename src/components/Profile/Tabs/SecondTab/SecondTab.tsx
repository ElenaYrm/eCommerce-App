import styles from './secondTab.module.scss';
import { Formik } from 'formik';
import { MouseEvent, ReactElement, useEffect, useState } from 'react';
import { Button } from '../../../shared/Button';
import { initialEditAddresses } from '../../../../constant';
import { CustomerAddress } from './CustomerAdress';
import { AddressForm } from '../../../RegisterForm/AddressForm';
import classNames from 'classnames';
import { IAddressForm } from '../../../RegisterForm/AddressForm/AddressForm';
import { useIsEditMode, useUpdateEditMode } from '../../../../pages/Profile/profileContext';
import { Radiobtn } from './Radiobtn';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../../store/user/selectors';
import { useAppDispatch } from '../../../../store/store';
import { getUserThunk } from '../../../../store/user/thunks';
import { Address } from '@commercetools/platform-sdk';
import { IAddNewAddress, IRemoveAddress, ISetDefaultAddress } from '../../../../services/sdk/customer/types';
import { removeAddressThunk } from '../../../../store/user/thunks/removeAddressThunk';
import { setDefaultAddressIdThunk } from '../../../../store/user/thunks/setDefaultAddressIdThunk';
import { addNewAddressThunk } from '../../../../store/user/thunks/addNewAddressThunk';

export interface IAddressesProfile {
  shipping: IAddressForm;
  billing: IAddressForm;
}

function SecondTab(): ReactElement {
  const [isShipping, setIsShipping] = useState(true);
  const isEditMode = useIsEditMode();
  const updateEditMode = useUpdateEditMode();
  const user = useSelector(selectUserData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.id) {
      dispatch(getUserThunk());
    }
  }, [user, dispatch]);

  function handleSubmit(values: IAddressesProfile): void {
    const isShippingAddress = values.shipping.city !== '';
    const isDefault = isShippingAddress ? values.shipping.isDefault : values.billing.isDefault;
    if (isDefault !== undefined) {
      const addNewAddressData: IAddNewAddress = {
        id: user.id,
        version: user.version,
        action: [
          {
            action: 'addAddress',
            address: {
              streetName: isShippingAddress ? values.shipping.streetName : values.billing.streetName,
              city: isShippingAddress ? values.shipping.city : values.billing.city,
              postalCode: isShippingAddress ? values.shipping.postalCode : values.billing.postalCode,
              country: isShippingAddress ? values.shipping.country : values.billing.country,
            },
          },
        ],
        isShipping: isShippingAddress,
        isDefault: isDefault,
      };
      dispatch(addNewAddressThunk(addNewAddressData));
    }
  }

  function deleteAddress(addressId: string): void {
    const addressData: IRemoveAddress = { version: user.version, customerId: user.id, addressId: addressId };

    dispatch(removeAddressThunk(addressData));
  }

  function setDefaultAddress(e: MouseEvent, addressId: string): void {
    const clickedElement = e.target;

    if (clickedElement && clickedElement instanceof HTMLElement) {
      const clickElIsActive = Array.from(clickedElement.classList).some((el) => el.includes('active'));
      if (clickElIsActive) {
        return;
      }

      const isShipAddress = clickedElement.getAttribute('data-isshipping') === 'true';
      const thunkData: ISetDefaultAddress = {
        customerId: user.id,
        version: user.version,
        addressId,
        isShipping: isShipAddress,
      };
      dispatch(setDefaultAddressIdThunk(thunkData));
    }
  }

  return (
    <div className={styles.root}>
      {isEditMode && (
        <Formik initialValues={initialEditAddresses} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange, setFieldTouched, touched, errors, values, resetForm }): ReactElement => (
            <>
              <div className={classNames(styles.root__toggleShipping, styles.toggleShipping)}>
                <Radiobtn
                  isShipping={isShipping}
                  setIsShipping={(): void => setIsShipping(true)}
                  value={'shipping'}
                  label="Shipping address"
                  callback={resetForm}
                ></Radiobtn>
                <Radiobtn
                  isShipping={!isShipping}
                  setIsShipping={(): void => setIsShipping(false)}
                  value={'billing'}
                  label="Billing address"
                  callback={resetForm}
                ></Radiobtn>
              </div>
              <form className={styles.root__formContainer} onSubmit={handleSubmit} noValidate>
                <AddressForm
                  type={isShipping ? 'shipping' : 'billing'}
                  handleChange={handleChange}
                  values={isShipping ? values.shipping : values.billing}
                  touched={isShipping ? touched.shipping : touched.billing}
                  errors={isShipping ? errors.shipping : errors.billing}
                  setFieldTouched={setFieldTouched}
                  className={styles.root__formContainer_form}
                />
                {isEditMode && <Button type="submit" name="Save address" className={styles.root__btn} />}
                {isEditMode && (
                  <button type="button" className={styles.root__closeBtn} onClick={(): void => updateEditMode(false)}>
                    Close
                  </button>
                )}
              </form>
            </>
          )}
        </Formik>
      )}

      {!isEditMode && (
        <div>
          <Button
            name="Add new address"
            className={styles.root__addAddressBtn}
            type="button"
            onClick={(): void => updateEditMode(!isEditMode)}
          />
          <ul>
            {user.addresses.map((addressData: Address, index: number) => {
              return (
                <CustomerAddress
                  key={String(addressData.id)}
                  values={addressData}
                  index={index}
                  deleteAddress={(): void => deleteAddress(addressData.id || '')}
                  addressId={addressData.id || ''}
                  setDefaultAddress={(e: MouseEvent<HTMLButtonElement>): void =>
                    setDefaultAddress(e, addressData.id || '')
                  }
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SecondTab;
