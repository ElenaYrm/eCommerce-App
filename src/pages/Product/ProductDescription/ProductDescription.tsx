import { ReactElement, memo } from 'react';
import { useSelector } from 'react-redux';
import { splitToParagraphs } from '../../../utils';
import { Accordion } from '../../../components/shared/Accordion';
import { productAccordionData } from '../../../constant';
import { RootState } from '../../../store/store';

import styles from './productDescription.module.scss';

function ProductDescriptionComp(): ReactElement {
  const { product } = useSelector((store: RootState) => store.product);

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

const ProductDescription = memo(ProductDescriptionComp);

export default ProductDescription;
