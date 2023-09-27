import { ReactElement, memo } from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../../utils';

import styles from './productTitle.module.scss';
import classnames from 'classnames';
import { selectProduct } from '../../../store/product/selectors';

function ProductTitleComp(): ReactElement {
  const { product } = useSelector(selectProduct);

  return (
    <>
      <h2 className={styles.artist}>{product.artist}</h2>
      <h2 className={styles.title}>
        {product.title}, <span>{product.year}</span>
      </h2>
      <div className={classnames(styles.price, product.discountPrice ? styles.price__double : '')}>
        {product.discountPrice ? (
          <span className={styles.price__discounted}>{formatPrice(product.discountPrice)}</span>
        ) : null}
        <span className={styles.price__full}>{formatPrice(product.price)}</span>
      </div>
    </>
  );
}

const ProductTitle = memo(ProductTitleComp);

export default ProductTitle;
