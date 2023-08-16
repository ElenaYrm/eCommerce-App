import { ReactElement } from 'react';
import { IAddressForm } from '../types';
import classNames from 'classnames';

import styles from './addressForm.module.scss';
function AddressForm({ type, values, errors, handleChange, touched, className }: IAddressForm): ReactElement {
  return (
    <div className={classNames(className, styles.address)}>
      <h3>{`${type[0].toUpperCase() + type.slice(1).toLowerCase()} address`}</h3>

      <label className={styles.address__item}>
        <span className="visually-hidden">Street</span>
        <input
          name={`${type}.streetName`}
          type="text"
          placeholder="Street"
          onChange={handleChange}
          value={values.streetName}
          className={styles.address__input}
        />
        {touched?.streetName && errors?.streetName ? (
          <span className={styles.address__error}>{errors.streetName}</span>
        ) : null}
      </label>

      <div className={classNames(styles.address__item, styles.address__double)}>
        <label className={styles.address__subitem}>
          <span className="visually-hidden">City</span>
          <input
            name={`${type}.city`}
            type="text"
            placeholder="City"
            onChange={handleChange}
            value={values.city}
            className={styles.address__input}
          />
          {touched?.city && errors?.city ? <span className={styles.address__error}>{errors.city}</span> : null}
        </label>

        <label className={styles.address__subitem}>
          <span className="visually-hidden">ZIP code</span>
          <input
            name={`${type}.postalCode`}
            type="text"
            placeholder="ZIP code"
            onChange={handleChange}
            value={values.postalCode}
            className={styles.address__input}
          />
          {touched?.postalCode && errors?.postalCode ? (
            <span className={styles.address__error}>{errors.postalCode}</span>
          ) : null}
        </label>
      </div>

      <label className={styles.address__item}>
        <span className="visually-hidden">Country</span>
        <input
          id={`${type}Country`}
          name={`${type}.country`}
          type="text"
          placeholder="Country"
          onChange={handleChange}
          value={values.country}
          disabled={true}
          className={styles.address__input}
        />
      </label>
    </div>
  );
}

export default AddressForm;
