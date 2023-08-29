import styles from './secondTab.module.scss';
import { Formik } from 'formik';
import { ReactElement, useEffect, useState } from 'react';
import { Button } from '../../../shared/Button';
import { ITabsProps } from '../FirstTab/FirstTab';
import { IAddress, initialRegisterForm, testUser } from '../../../../constant';
import { Address } from './Adress';
import { AddressForm } from '../../../RegisterForm/AddressForm';

function SecondTab({ isEditMode, setIsEditing }: ITabsProps): ReactElement {
  const [addresses, setAddresses] = useState<IAddress[]>(testUser.addresses);
  function handleSubmit(): void {}

  function deleteAddress(indexToRemove: number): void {
    const newAddresses: IAddress[] = [...addresses];
    newAddresses.splice(indexToRemove, 1);
    setAddresses(newAddresses);
    console.log(indexToRemove, newAddresses);
  }

  useEffect(() => {}, [addresses]);

  return (
    <div className={styles.root}>
      {isEditMode ? (
        <Formik initialValues={initialRegisterForm.shipping} onSubmit={handleSubmit} validateOnBlur={false}>
          {({ handleSubmit, handleChange, setFieldTouched, touched, errors }): ReactElement => (
            <form className={styles.root__form} onSubmit={handleSubmit} noValidate>
              <AddressForm
                type="shipping"
                handleChange={handleChange}
                values={initialRegisterForm.shipping}
                touched={touched}
                errors={errors}
                setFieldTouched={setFieldTouched}
              />
              {isEditMode ? <Button type="submit" name="Save address" className={styles.root__btn} /> : ''}
              {isEditMode ? (
                <button type="button" className={styles.root__closeBtn} onClick={(): void => setIsEditing(false)}>
                  {' '}
                  Close
                </button>
              ) : (
                ''
              )}
            </form>
          )}
        </Formik>
      ) : (
        <div>
          <button className={styles.root__addAddressBtn} type="button" onClick={(): void => setIsEditing(!isEditMode)}>
            Add new address
          </button>
          {testUser.addresses.map((addressData: IAddress, index: number) => {
            return <Address key={index} values={addressData} index={index} deleteAddress={deleteAddress} />;
          })}
        </div>
      )}
    </div>
  );
}

export default SecondTab;
