import { ReactElement } from 'react';
import { ProductItem } from './ProductItem';
import { IProduct } from '../../types/interfaces';

import styles from './productsList.module.scss';

interface ProductsListProps {
  products: IProduct[];
}

function ProductsList({ products }: ProductsListProps): ReactElement {
  return (
    <>
      {products.length > 0 ? (
        <ul className={styles.products}>
          {products.map((item) => (
            <ProductItem item={item} key={item.productId} className={styles.products__item} />
          ))}
        </ul>
      ) : (
        <div>There are no items</div>
      )}
    </>
  );
}

export default ProductsList;
