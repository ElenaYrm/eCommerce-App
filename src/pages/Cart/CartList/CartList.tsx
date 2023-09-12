import { ReactElement } from 'react';
import { Button } from '../../../components/shared/Button';
import { ICart, IItemCart } from '../../../store/cart/types';
import { formatPrice } from '../../../utils';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../../store/auth/selectors';
import { useAppDispatch } from '../../../store/store';
import { updateCartThunk } from '../../../store/cart/thunks';

import styles from './cartList.module.scss';
// import classnames from 'classnames';

interface ICartListProps {
  cart: ICart;
  handleRemoveCartItem: (item: IItemCart) => void;
}

export default function CartList({ cart, handleRemoveCartItem }: ICartListProps): ReactElement {
  const isAuthorized = useSelector(selectIsAuthorized);
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
        id: cart.id,
        version: cart.version,
        actions: [
          {
            action: 'changeLineItemQuantity',
            lineItemId: item.itemId,
            quantity: quantity,
          },
        ],
        isAuth: isAuthorized,
      }),
    );
  }

  return (
    <ul className={styles.items__list}>
      {cart.lineItems.map((item) => (
        <li className={styles.item} key={item.itemId}>
          <div className={styles.item__container}>
            <div className={styles.item__image}>
              <img src={item.image} alt={`${item.name} by ${item.artist}`} />
            </div>
            <div className={styles.item__info}>
              <div className={styles.header}>
                <div className={styles.header__content}>
                  <h4 className={styles.header__title}>{item.name}</h4>
                  <h4 className={styles.header__artist}>{item.artist}</h4>
                  <div className={styles.header__prices}>
                    {item.discountedPrice ? (
                      <span className={styles.price}>{formatPrice(item.discountedPrice / 100)}</span>
                    ) : null}
                    <span className={styles.price}>{formatPrice(item.price / 100)}</span>
                  </div>
                </div>
                <div className={styles.header__controls}>
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
              </div>
              <div className={styles.footer}>
                <Button
                  type="button"
                  name="Remove"
                  className={styles.item__button_remove}
                  handleClick={(): void => handleRemoveCartItem(item)}
                />
                <div className={styles.footer__total}>
                  {formatPrice(((item.discountedPrice || item.price) / 100) * item.quantity)}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
