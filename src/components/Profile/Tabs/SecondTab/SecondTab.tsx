import styles from './secondTab.module.scss';
import { Formik } from 'formik';
import { ReactElement, useEffect, useState } from 'react';
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
import { IAuthAddress } from '../../../../types/interfaces';

export interface IAddressesProfile {
  shipping: IAddressForm;
  billing: IAddressForm;
}

function SecondTab(): ReactElement {
  const [isShipping, setIsShipping] = useState(true);
  const isEditMode = useIsEditMode();
  const updateEditMode = useUpdateEditMode();
  const user = useSelector(selectUserData);
  const [addresses, setAddresses] = useState<IAuthAddress[]>(user.addresses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.id) {
      dispatch(getUserThunk());
    }
  }, [user, dispatch]);

  function handleSubmit(values: IAddressesProfile): void {
    console.log(values);
  }

  function deleteAddress(indexToRemove: number): void {
    const newAddresses: IAuthAddress[] = [...addresses];
    newAddresses.splice(indexToRemove, 1);
    setAddresses(newAddresses);
    console.log(indexToRemove, newAddresses);
  }

  useEffect(() => {}, [addresses]);

  return (
    <div className={styles.root}>
      {isEditMode && (
        <>
          <div className={classNames(styles.root__toggleShipping, styles.toggleShipping)}>
            <Radiobtn
              isShipping={isShipping}
              setIsShipping={(): void => setIsShipping(true)}
              value={'shipping'}
              label="Shipping address"
            ></Radiobtn>
            <Radiobtn
              isShipping={!isShipping}
              setIsShipping={(): void => setIsShipping(false)}
              value={'billing'}
              label="Billing address"
            ></Radiobtn>
          </div>

          <Formik initialValues={initialEditAddresses} onSubmit={handleSubmit}>
            {({ handleSubmit, handleChange, setFieldTouched, touched, errors, values }): ReactElement => (
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
            )}
          </Formik>
        </>
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
            {user.addresses.map((addressData: IAuthAddress, index: number) => {
              console.log(addressData);
              return (
                <CustomerAddress
                  key={String(addressData.id)}
                  values={addressData}
                  index={index}
                  deleteAddress={deleteAddress}
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
