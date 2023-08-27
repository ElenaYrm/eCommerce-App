import styles from './secondTab.module.scss';
import { Formik } from 'formik';
import { ReactElement } from 'react';
import { Button } from '../../../shared/Button';
import { ITabsProps } from '../FirstTab/FirstTab';
import { initialRegisterForm, testUser } from '../../../../constant';
import { Address } from './Adress';
import { AddressForm } from '../../../RegisterForm/AddressForm';

function SecondTab({ isEditMode }: ITabsProps): ReactElement {
  function handleSubmit(): void {}

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
              {isEditMode ? <Button type="submit" name="Save adress" className={styles.root__btn} /> : ''}
            </form>
          )}
        </Formik>
      ) : (
        testUser.addresses.map((addressData, index) => {
          return <Address key={index} values={addressData} />;
        })
      )}
    </div>
  );
}

export default SecondTab;
