import { ReactElement, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { SearchField } from '../../components/SearchField';
import { SortingField } from '../../components/SortingField';
import { Filters } from '../../components/Filters';
import { ProductsList } from '../../components/ProductsList';
import { CategoryFilter } from '../../components/Filters/CategoryFilter';
import { ModalFilters } from './ModalFilters';

import styles from './catalog.module.scss';

function Catalog(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.catalog}>
      <Breadcrumbs />
      <div className={styles.catalog__wrapper}>
        <div>
          <CategoryFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            className={styles.catalog__category}
          />
          <Filters className={styles.catalog__filters} onClick={(): void => {}} />
        </div>
        <div className={styles.catalog__content}>
          <div className={styles.catalog__search}>
            <SearchField />
            <div className={styles.catalog__sorting}>
              <button type="button" className={styles.catalog__modal} onClick={(): void => setIsOpen(true)}>
                Filters
              </button>
              <SortingField />
            </div>
          </div>
          <ProductsList />
        </div>
      </div>
      {isOpen && <ModalFilters onClick={(): void => setIsOpen(false)} />}
    </section>
  );
}

export default Catalog;
