import styles from './address.module.scss';
import classNames from 'classnames';
import { ReactElement, useEffect, useState } from 'react';
import { ModalWindow } from '../../../../shared/ModalWindow';
import { ModalChildren } from './ModalChildren';
import { selectUserData } from '../../../../../store/user/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../../store/store';
import { getUserThunk } from '../../../../../store/user/thunks';
import { Address } from '@commercetools/platform-sdk';

interface IAddressComp {
  values: Address;
  key: number | string;
  index: number;
  deleteAddress: (index: number) => void;
}

function CustomerAddress({ values, deleteAddress, index }: IAddressComp): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUserData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.id) {
      dispatch(getUserThunk());
    }
  }, [user, dispatch]);
  function isDefaultShipping(): boolean {
    return values.id === user.defaultShippingAddressId;
  }
  function isDefaultBilling(): boolean {
    return values.id === user.defaultBillingAddressId;
  }

  return (
    <li className={classNames(styles.item)}>
      <div className={classNames(styles.item__data)}>
        <div>{values.streetName}</div>
        <div>{`${values.postalCode} ${values.city}`}</div>
        <div>{values.country}</div>
      </div>
      <div className={classNames(styles.item__btns, styles.configureBtns)}>
        <button className={styles.configureBtns__btn} onClick={(): void => setIsModalOpen(true)}>
          Edit
        </button>
        <ModalWindow
          children={<ModalChildren values={values} isShipping={true}></ModalChildren>}
          isOpen={isModalOpen}
          onClose={(): void => setIsModalOpen(!isModalOpen)}
        ></ModalWindow>
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

export default CustomerAddress;
