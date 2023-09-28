import { ReactElement } from 'react';
import { ICart, IItemCart } from '../../store/cart/types';
import { formatPrice } from '../../utils';
import { Link } from 'react-router-dom';
import { PATH } from '../../router/constants/paths.ts';
import { Page } from '../../router/types';
import { QuantityControls } from './QuantityControls';

import styles from './cartList.module.scss';

interface ICartListProps {
  basket: ICart;
  handleRemoveCartItem: (item: IItemCart) => void;
}

export default function CartList({ basket, handleRemoveCartItem }: ICartListProps): ReactElement {
  return (
    <ul className={styles.items__list}>
      {basket.lineItems.map((item) => (
        <li className={styles.item} key={item.itemId}>
          <div className={styles.item__container}>
            <div className={styles.item__image}>
              <img src={item.image} alt={`${item.name} by ${item.artist}`} />
            </div>

            <div className={styles.item__info}>
              <div className={styles.header}>
                <div className={styles.header__content}>
                  <Link to={`${PATH[Page.Product]}/${item.productId}`} className={styles.header__link}>
                    <h4 className={styles.header__title}>{item.name}</h4>
                    <h4 className={styles.header__artist}>{item.artist}</h4>
                  </Link>
                  <div className={styles.header__prices}>
                    {item.discountedPrice ? (
                      <span className={styles.price}>{formatPrice(item.discountedPrice / 100)}</span>
                    ) : null}
                    <span className={styles.price}>{formatPrice(item.price / 100)}</span>
                  </div>
                </div>

                <QuantityControls item={item} />
              </div>

              <div className={styles.footer}>
                <button
                  type="button"
                  className={styles.item__button_remove}
                  onClick={(): void => handleRemoveCartItem(item)}
                >
                  Remove
                </button>
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
