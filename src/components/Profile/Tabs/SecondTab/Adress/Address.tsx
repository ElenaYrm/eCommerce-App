import styles from './address.module.scss';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { IAddress } from '../../../../../constant';

interface IAddressComp {
  values: IAddress;
  key: number;
  index: number;
  deleteAddress: (index: number) => void;
}

function Address({ values, deleteAddress, index }: IAddressComp): ReactElement {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.root__data)}>
        <div>{values.streetName}</div>
        <div>{`${values.postalCode} ${values.city}`}</div>
        <div>{values.country}</div>
      </div>
      <div className={classNames(styles.root__btns)}>
        <button>Edit</button>
        <button onClick={(): void => deleteAddress(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Address;
