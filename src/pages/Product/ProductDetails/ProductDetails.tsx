import { ReactElement, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectCartError } from '../../../store/cart/selectors';
import { useAppDispatch } from '../../../store/store';
import { updateCartThunk } from '../../../store/cart/thunks';
import { IProduct } from '../../../types/interfaces';
// import { splitToParagraphs } from '../../../utils';
import { Button } from '../../../components/shared/Button';
// import { productAccordionData } from '../../../constant';
// import { Accordion } from '../../../components/shared/Accordion';
import { ErrorMessage } from '../../../components/shared/ErrorMessage';
import { useResetError } from '../../../hooks';
import { ProductTitle } from '../ProductTitle';
import { ProductInfo } from '../ProductInfo';

import styles from './productDetails.module.scss';
import classnames from 'classnames';

interface IProductDetailsProps {
  product: IProduct;
}

export default function ProductDetails({ product }: IProductDetailsProps): ReactElement {
  const cart = useSelector(selectCart);
  const error = useSelector(selectCartError);

  const { productId } = product;

  const dispatch = useAppDispatch();

  // useMemo
  const cartItem = useMemo(() => {
    return cart.lineItems.find((item) => item.productId === productId);
  }, [cart.lineItems, productId]);

  // custom hook
  useResetError(error, dispatch, 3000);

  const addToCart = useCallback(() => {
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
      }),
    );
  }, [dispatch, cart.id, cart.version, productId]);

  const removeCartItem = useCallback(() => {
    dispatch(
      updateCartThunk({
        id: cart.id,
        version: cart.version,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId: cartItem?.itemId,
            quantity: cartItem?.quantity,
          },
        ],
      }),
    );
  }, [dispatch, cart.id, cart.version, cartItem?.itemId, cartItem?.quantity]);

  return (
    <>
      <div className={styles.product__details}>
        {/* <h2 className={styles.artist}>{product.artist}</h2>
          <h2 className={styles.title}>
            {product.title}, <span>{product.year}</span>
          </h2>
          <div className={classnames(styles.price, product.discountPrice ? styles.price__double : '')}>
            {product.discountPrice ? (
              <span className={styles.price__discounted}>{formatPrice(product.discountPrice)}</span>
            ) : null}
            <span className={styles.price__full}>{formatPrice(product.price)}</span>
          </div> */}

        <ProductTitle product={product} />

        {!cartItem ? (
          <Button type="button" name="Add to Cart (●ω●)ノ" className={styles.button} handleClick={addToCart} />
        ) : (
          <Button
            type="button"
            name="Remove from Cart"
            className={classnames(styles.button, styles.button__remove)}
            handleClick={removeCartItem}
          />
        )}

        <ProductInfo product={product} />

        {/* <div className={styles.info}>
          <div className={styles.info__description}>
            <p className={styles.text}>{splitToParagraphs(product.description)}</p>
            <p className={styles.text}>
              <span>Technique:</span>
              {product.medium}
            </p>
            <p className={styles.text}>
              <span>Size:</span>
              {product.dimensions}
            </p>
          </div>
          <Accordion data={productAccordionData} className={styles.product__accordion} />
        </div> */}
      </div>
      {error && <ErrorMessage text={'Something wrong with Cart. Try again!'} className={styles.error__message} />}
    </>
  );
}
