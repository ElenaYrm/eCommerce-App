import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../router/constants/paths';
import { Page } from '../../../router/types';
import { IProduct } from '../../../types/interfaces';

interface ProductItemProps {
  item: IProduct;
  className?: string;
}

function ProductItem({ item, className }: ProductItemProps): ReactElement {
  const { productId, title, description } = item;

  return (
    <li className={className}>
      <Link to={`${PATH[Page.Product]}/${productId}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </li>
  );
}

export default ProductItem;
