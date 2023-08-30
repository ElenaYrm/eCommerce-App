import styles from './address.module.scss';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { IAddress, testUser } from '../../../../../constant';

interface IAddressComp {
  values: IAddress;
  key: number | string;
  index: number;
  deleteAddress: (index: number) => void;
}

function Address({ values, deleteAddress, index }: IAddressComp): ReactElement {
  function isDefaultShipping(): boolean {
    return values.id === testUser.defaultShippingAddressId;
  }
  function isDefaultBilling(): boolean {
    return values.id === testUser.defaultBillingAddressId;
  }

  return (
    <li className={classNames(styles.item)}>
      <div className={classNames(styles.item__data)}>
        <div>{values.streetName}</div>
        <div>{`${values.postalCode} ${values.city}`}</div>
        <div>{values.country}</div>
      </div>
      <div className={classNames(styles.item__btns, styles.configureBtns)}>
        <button className={styles.configureBtns__btn}>Edit</button>
        <button className={styles.configureBtns__btn} onClick={(): void => deleteAddress(index)}>
          Delete
        </button>
      </div>
      <div className={classNames(styles.item__defaultSettContainer, styles.defaultSettContainer)}>
        <button
          type="button"
          className={classNames(styles.defaultSettContainer__address, {
            [styles.defaultSettContainer__address_active]: isDefaultShipping(),
          })}
        >
          Default shipping address
        </button>
        <button
          type="button"
          className={classNames(styles.defaultSettContainer__address, {
            [styles.defaultSettContainer__address_active]: isDefaultBilling(),
          })}
        >
          Default billing address
        </button>
      </div>
    </li>
  );
}

export default Address;
