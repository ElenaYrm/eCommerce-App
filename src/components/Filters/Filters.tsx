import { ReactElement } from 'react';
import classnames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { PriceFilter } from './PriceFilter';
import { ColorFilter } from './ColorFilter';
import { SizeFilter } from './SizeFilter';
import { BrandFilter } from './BrandFilter';
import { CategoryFilter } from './CategoryFilter';
import { changeParams } from '../../utils';
import { SearchParams } from '../../types/enums';
import { FiltersProps } from './types';

import styles from './filters.module.scss';

function Filters({ className }: FiltersProps): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(): void {
    changeParams(setSearchParams, '', SearchParams.Category);
    changeParams(setSearchParams, '', SearchParams.PriceFrom);
    changeParams(setSearchParams, '', SearchParams.PriceTo);
    changeParams(setSearchParams, '', SearchParams.Brand);
    changeParams(setSearchParams, '', SearchParams.Color);
    changeParams(setSearchParams, '', SearchParams.Size);
  }

  return (
    <div className={classnames(styles.filters, className)}>
      <CategoryFilter searchParams={searchParams} setSearchParams={setSearchParams} className={styles.filters__item} />
      <PriceFilter searchParams={searchParams} setSearchParams={setSearchParams} className={styles.filters__item} />
      <BrandFilter searchParams={searchParams} setSearchParams={setSearchParams} className={styles.filters__item} />
      <ColorFilter searchParams={searchParams} setSearchParams={setSearchParams} className={styles.filters__item} />
      <SizeFilter searchParams={searchParams} setSearchParams={setSearchParams} className={styles.filters__item} />
      <div>
        <button type="button" onClick={handleClick}>
          Clear filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
