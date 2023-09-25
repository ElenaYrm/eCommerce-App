import { ReactElement, memo } from 'react';
import { IProduct } from '../../../types/interfaces';
import { splitToParagraphs } from '../../../utils';
import { Accordion } from '../../../components/shared/Accordion';
import { productAccordionData } from '../../../constant';

import styles from './productInfo.module.scss';

interface IProductDetailsProps {
  product: IProduct;
}

function ProductInfo({ product }: IProductDetailsProps): ReactElement {
  return (
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
      <Accordion data={productAccordionData} className={styles.product__accordion} />
    </div>
  );
}

export default memo(ProductInfo);
