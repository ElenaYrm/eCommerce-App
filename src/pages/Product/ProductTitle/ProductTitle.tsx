import { ReactElement, memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { formatPrice } from '../../../utils';

import styles from './productTitle.module.scss';
import classnames from 'classnames';

function ProductTitleComp(): ReactElement {
  const { product } = useSelector((store: RootState) => store.product);

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
