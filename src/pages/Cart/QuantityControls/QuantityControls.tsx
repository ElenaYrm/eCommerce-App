import { ReactElement } from 'react';
import { Button } from '../../../components/shared/Button';
import { ICart, IItemCart } from '../../../store/cart/types';
import { useAppDispatch } from '../../../store/store';
import { updateCartThunk } from '../../../store/cart/thunks';

import styles from './quantityControls.module.scss';

interface IQuantityControlsProps {
  basket: ICart;
  item: IItemCart;
}

export default function QuantityControls({ basket, item }: IQuantityControlsProps): ReactElement {
  const dispatch = useAppDispatch();

  function handleAddQuantity(item: IItemCart): void {
    if (item.quantity === 10) return;
    updateQuantity(item, item.quantity + 1);
  }

  function handleRemoveQuantity(item: IItemCart): void {
    if (item.quantity === 1) return;
    updateQuantity(item, item.quantity - 1);
  }

  function updateQuantity(item: IItemCart, quantity: number): void {
    dispatch(
      updateCartThunk({
        id: basket.id,
        version: basket.version,
        actions: [
          {
            action: 'changeLineItemQuantity',
            lineItemId: item.itemId,
            quantity: quantity,
          },
        ],
      }),
    );
  }

  return (
    <div className={styles.quantity__controls}>
      <span>Qt:</span>
      <span className={styles.controls__count}>{item.quantity}</span>
      <div className={styles.controls__buttons}>
        <Button
          type="button"
          name=""
          className={styles.controls__buttons_btn}
          disabled={item.quantity === 1}
          handleClick={(): void => handleRemoveQuantity(item)}
        />
        <Button
          type="button"
          name=""
          className={styles.controls__buttons_btn}
          disabled={item.quantity === 10}
          handleClick={(): void => handleAddQuantity(item)}
        />
      </div>
    </div>
  );
}
