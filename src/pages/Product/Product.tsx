import { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { productThunk } from '../../store/product/thunks';
import { useAppDispatch } from '../../store/store';
import { Slider } from '../../components/Slider/Slider';
import { Button } from '../../components/shared/Button';
import { Accordion } from '../../components/shared/Accordion/Accordion';
import { productAccordionData } from '../../constant';
import { formatPrice, splitToParagraphs } from '../../utils';

import styles from './product.module.scss';
import classnames from 'classnames';

// const productId = 'e2e31f59-6a44-4af0-882b-c56f63f7f14e';

export default function Product(): ReactElement {
  const id = useParams().id || '';

  const { product } = useSelector((store: RootState) => store.product);
  const dispatch = useAppDispatch();

  const [fullscreen, setFullscreen] = useState(false);

  function handleFullScreen(): void {
    setFullscreen((mode) => (mode = !mode));
  }

  useEffect(() => {
    if (product.productId !== id) {
      dispatch(productThunk(id));
    }
  }, [id]);

  return (
    <div className={styles.product}>
      <Slider images={product.images} fullscreen={fullscreen} handleClick={handleFullScreen} />

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

        <Button type="button" name="Add to Cartヾ(●ω●)ノ" className={styles.button}></Button>

        <div className={styles.info}>
          <h3 className={styles.info__title}>Description</h3>
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
