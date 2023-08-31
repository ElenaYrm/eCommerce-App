import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { PATH } from '../../../router/constants/paths';
import { Page } from '../../../router/types';
import { IProduct } from '../../../types/interfaces';

import styles from './productCard.module.scss';

interface ProductItemProps {
  item: IProduct;
  className?: string;
}

function ProductCard({ item, className }: ProductItemProps): ReactElement {
  const { productId, title, description } = item;

  return (
    <li className={classnames(className, styles.card)}>
      <Link to={`${PATH[Page.Product]}/${productId}`}>
        <h3>{title}</h3>
        <p className={styles.card__descr}>{description}</p>
      </Link>
    </li>
  );
}

export default ProductCard;
