import { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { SearchField } from '../../components/SearchField';
import { SortingField } from '../../components/SortingField';
import { Filters } from '../../components/Filters';
import { ProductsList } from '../../components/ProductsList';
import { CategoryFilter } from '../../components/Filters/CategoryFilter';

import styles from './catalog.module.scss';

function Catalog(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <section className={styles.catalog}>
      <Breadcrumbs />
      <div className={styles.catalog__wrapper}>
        <div className={styles.catalog__filters}>
          <CategoryFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            className={styles.catalog__category}
          />
          <Filters />
        </div>
        <div className={styles.catalog__content}>
          <div className={styles.catalog__search}>
            <SearchField />
            <SortingField />
          </div>
          <ProductsList />
        </div>
      </div>
    </section>
  );
}

export default Catalog;
