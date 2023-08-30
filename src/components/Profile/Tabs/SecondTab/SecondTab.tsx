import styles from './secondTab.module.scss';
import { Formik } from 'formik';
import { ReactElement, useEffect, useState } from 'react';
import { Button } from '../../../shared/Button';
import { ITabsProps } from '../FirstTab/FirstTab';
import { IAddress, initialEditAddresses, testUser } from '../../../../constant';
import { Address } from './Adress';
import { AddressForm } from '../../../RegisterForm/AddressForm';
import classNames from 'classnames';

function SecondTab({ isEditMode, setIsEditing }: ITabsProps): ReactElement {
  const [isShipping, setIsShipping] = useState(true);
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
        <>
          <div className={classNames(styles.root__toggleShipping, styles.toggleShipping)}>
            <button
              className={classNames(styles.toggleShipping__btn, isShipping && styles.toggleShipping__btn_active)}
              type="button"
              onClick={(): void => setIsShipping(true)}
            >
              Shipping address
            </button>
            <button
              className={classNames(styles.toggleShipping__btn, !isShipping && styles.toggleShipping__btn_active)}
              type="button"
              onClick={(): void => setIsShipping(false)}
            >
              Billing address
            </button>
          </div>

          <Formik initialValues={initialEditAddresses} onSubmit={handleSubmit}>
            {({ handleSubmit, handleChange, setFieldTouched, touched, errors, values }): ReactElement => (
              <form className={styles.root__formContainer} onSubmit={handleSubmit} noValidate>
                {isShipping ? (
                  <AddressForm
                    type="shipping"
                    handleChange={handleChange}
                    values={values.shipping}
                    touched={touched.shipping}
                    errors={errors.shipping}
                    setFieldTouched={setFieldTouched}
                    className={styles.root__formContainer_form}
                  />
                ) : (
                  <AddressForm
                    type="billing"
                    handleChange={handleChange}
                    values={values.billing}
                    touched={touched.billing}
                    errors={errors.billing}
                    setFieldTouched={setFieldTouched}
                    className={styles.root__formContainer_form}
                  />
                )}

                {isEditMode && <Button type="submit" name="Save address" className={styles.root__btn} />}
                {isEditMode && (
                  <button type="button" className={styles.root__closeBtn} onClick={(): void => setIsEditing(false)}>
                    Close
                  </button>
                )}
              </form>
            )}
          </Formik>
        </>
      ) : (
        <div>
          <Button
            name="Add new address"
            className={styles.root__addAddressBtn}
            type="button"
            onClick={(): void => setIsEditing(!isEditMode)}
          />
          <ul>
            {testUser.addresses.map((addressData: IAddress, index: number) => {
              return <Address key={addressData.id} values={addressData} index={index} deleteAddress={deleteAddress} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SecondTab;
