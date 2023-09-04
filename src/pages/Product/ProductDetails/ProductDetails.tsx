import { ReactElement } from 'react';
import { IProduct } from '../../../types/interfaces';
import { formatPrice, splitToParagraphs } from '../../../utils';
import { Button } from '../../../components/shared/Button';
import { Accordion } from '../../../components/shared/Accordion/Accordion';
import { productAccordionData } from '../../../constant';

import styles from './productDetails.module.scss';
import classnames from 'classnames';

interface IProductDetailsProps {
  product: IProduct;
}

export default function ProductDetails({ product }: IProductDetailsProps): ReactElement {
  return (
    <div className={styles.product}>
      <div className={styles.product__details}>
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

        <Button type="button" name="Add to Cart (●ω●)ノ" className={styles.button}></Button>

        <div className={styles.info}>
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
        </div>

        <Accordion data={productAccordionData} className={styles.product__accordion} />
      </div>
    </div>
  );
}
