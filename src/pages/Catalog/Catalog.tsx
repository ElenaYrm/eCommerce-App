import { ReactElement } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { SearchField } from '../../components/SearchField';
import { SortingField } from '../../components/SortingField';
import { Filters } from '../../components/Filters';
import { ProductsList } from '../../components/ProductsList';

import styles from './catalog.module.scss';

function Catalog(): ReactElement {
  return (
    <section className={styles.catalog}>
      <Breadcrumbs />
      <div className={styles.catalog__search}>
        <SearchField />
        <SortingField />
      </div>
      <div className={styles.catalog__content}>
        <Filters />
        <ProductsList />
      </div>
    </section>
  );
}

export default Catalog;
