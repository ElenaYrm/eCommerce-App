import styles from './address.module.scss';
import classNames from 'classnames';
import { ReactElement } from 'react';

function Address({ values }: { values: Record<string, string> }): ReactElement {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.root__data)}>
        <div>{values.streetName}</div>
        <div>{`${values.postalCode} ${values.city}`}</div>
        <div>{values.country}</div>
      </div>
      <div className={classNames(styles.root__btns)}>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div className={classNames(styles.root__checkboxContainer)}>
        <div>
          <input type="checkbox" id="billingCheckbox" value="Default billing address" />
          <label htmlFor="billingCheckbox">Default billing address</label>
        </div>

        <div>
          <input type="checkbox" id="shippingCheckbox" value="Default shipping address" />
          <label htmlFor="shippingCheckbox">Default shipping address</label>
        </div>
      </div>
    </div>
  );
}

export default Address;
