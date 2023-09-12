import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { PATH } from '../../../router/constants/paths';
import { Page } from '../../../router/types';
import { IProduct } from '../../../types/interfaces';
import { updateCartThunk } from '../../../store/cart/thunks';
import { selectIsAuthorized } from '../../../store/auth/selectors';
import { selectCart } from '../../../store/cart/selectors';
import { useAppDispatch } from '../../../store/store';

import styles from './productCard.module.scss';

interface ProductItemProps {
  item: IProduct;
  className?: string;
}

function ProductCard({ item, className }: ProductItemProps): ReactElement {
  const { productId, title, artist, medium, dimensions, price, discountPrice, images } = item;
  const isAuthorized = useSelector(selectIsAuthorized);
  const cart = useSelector(selectCart);

  const dispatch = useAppDispatch();

  function addToCart(event: React.MouseEvent): void {
    event.preventDefault();
    dispatch(
      updateCartThunk({
        id: cart.id,
        version: cart.version,
        actions: [
          {
            action: 'addLineItem',
            productId,
            variantId: 1,
            quantity: 1,
          },
        ],
        isAuth: isAuthorized,
      }),
    );
  }

  return (
    <li className={classnames(className, styles.card)}>
      <Link to={`${PATH[Page.Product]}/${productId}`} className={styles.card__link}>
        <img src={images?.[0]} alt={`${artist} ${title}`} className={styles.card__img} />
        <div className={styles.card__descr}>
          <div className={styles.card__title}>
            <h3 className={styles.card__author}>{title}</h3>
            <p className={styles.card__text}>{artist}</p>
          </div>
          <div className={styles.card__detail}>
            <p className={styles.card__text}>{medium}</p>
            <p className={classnames(styles.card__text, styles.card__dim)}>{dimensions}</p>
          </div>
          <div className={styles.card__price}>
            <span className={styles.card__price_current}>{discountPrice ? `$${discountPrice}` : `$${price}`}</span>
            <span className={styles.card__price_discont}>{discountPrice ? `$${price}` : ''}</span>
          </div>
          <button type="button" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
