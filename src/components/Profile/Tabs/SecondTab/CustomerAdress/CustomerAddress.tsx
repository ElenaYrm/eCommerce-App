import styles from './address.module.scss';
import classNames from 'classnames';
import { MouseEvent, ReactElement, useEffect, useState } from 'react';
import { ModalWindow } from '../../../../shared/ModalWindow';
import { EditCard } from './EditCard';
import { selectEditStatus, selectUserData } from '../../../../../store/user/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../../store/store';
import { getUserThunk } from '../../../../../store/user/thunks';
import { Address } from '@commercetools/platform-sdk';

interface IAddressComp {
  values: Address;
  key: number | string;
  index: number;
  deleteAddress: (addressId: string) => void;
  addressId: string;
  setDefaultAddress: (e: MouseEvent<HTMLButtonElement>, addressId: string) => void;
}

function CustomerAddress({ addressId, values, deleteAddress, setDefaultAddress }: IAddressComp): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const editStatus = useSelector(selectEditStatus);
  const user = useSelector(selectUserData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.id) {
      dispatch(getUserThunk());
    }

    if (editStatus === 'success') {
      setIsModalOpen(false);
    }
  }, [user, dispatch, editStatus]);

  function isDefaultShipping(): boolean {
    return values.id === user.defaultShippingAddressId;
  }
  function isDefaultBilling(): boolean {
    return values.id === user.defaultBillingAddressId;
  }

  function isShipping(): boolean {
    return user.shippingAddressIds.includes(String(values.id));
  }

  return (
    <li className={classNames(styles.item)}>
      <div className={classNames(styles.item__data)}>
        <div>{values.streetName}</div>
        <div>{`${values.postalCode} ${values.city}`}</div>
        <div>{values.country}</div>
      </div>
      <div className={classNames(styles.item__btns, styles.configureBtns)}>
        <div> {isShipping() ? 'Shipping' : 'Billing'}</div>
        <button className={styles.configureBtns__btn} onClick={(): void => setIsModalOpen(true)}>
          Edit
        </button>
        <ModalWindow
          children={<EditCard values={values} isShipping={true} addressId={addressId}></EditCard>}
          isOpen={isModalOpen}
          onClose={(): void => setIsModalOpen(!isModalOpen)}
        />
        <button className={styles.configureBtns__btn} onClick={(): void => deleteAddress(addressId)}>
          Delete
        </button>
      </div>
      <div className={classNames(styles.item__defaultSettContainer, styles.defaultSettContainer)}>
        <button
          type="button"
          data-isshipping="true"
          className={classNames(styles.defaultSettContainer__address, {
            [styles.defaultSettContainer__address_active]: isDefaultShipping(),
          })}
          onClick={(e): void => {
            setDefaultAddress(e, addressId);
          }}
        >
          Default shipping address
        </button>
        <button
          type="button"
          data-isshipping="false"
          className={classNames(styles.defaultSettContainer__address, {
            [styles.defaultSettContainer__address_active]: isDefaultBilling(),
          })}
          onClick={(e): void => {
            setDefaultAddress(e, addressId);
          }}
        >
          Default billing address
        </button>
      </div>
    </li>
  );
}

export default CustomerAddress;
