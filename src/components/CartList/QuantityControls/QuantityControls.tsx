import { ReactElement, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../shared/Button';
import { IItemCart } from '../../../store/cart/types';
import { useAppDispatch } from '../../../store/store.ts';
import { updateCartThunk } from '../../../store/cart/thunks';
import { selectCartData } from '../../../store/cart/selectors';
import { MAX_QUANTITY } from '../../../constant';

import styles from './quantityControls.module.scss';

interface IQuantityControlsProps {
  item: IItemCart;
}

export default function QuantityControls({ item }: IQuantityControlsProps): ReactElement {
  const { basket } = useSelector(selectCartData);

  const dispatch = useAppDispatch();

  const updateQuantity = useCallback(
    (item: IItemCart, quantity: number): void => {
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
    },
    [basket, dispatch],
  );

  const handleAddQuantity = useCallback(
    (item: IItemCart): void => {
      if (item.quantity === MAX_QUANTITY) return;
      updateQuantity(item, item.quantity + 1);
    },
    [updateQuantity],
  );

  const handleRemoveQuantity = useCallback(
    (item: IItemCart): void => {
      if (item.quantity === 1) return;
      updateQuantity(item, item.quantity - 1);
    },
    [updateQuantity],
  );

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
