import { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PriceFilter } from './PriceFilter';
import { ColorFilter } from './ColorFilter';
import { SizeFilter } from './SizeFilter';
import { BrandFilter } from './BrandFilter';
import { changeParams } from '../../utils';
import { SearchParams } from '../../types/enums';
import { FiltersProps } from './types';

import styles from './filters.module.scss';

function Filters({ className, onClick, isShowResults }: FiltersProps): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(): void {
    changeParams(setSearchParams, '', SearchParams.Category);
    changeParams(setSearchParams, '', SearchParams.PriceFrom);
    changeParams(setSearchParams, '', SearchParams.PriceTo);
    changeParams(setSearchParams, '', SearchParams.Brand);
    changeParams(setSearchParams, '', SearchParams.Color);
    changeParams(setSearchParams, '', SearchParams.Size);

    if (isShowResults) {
      onClick();
    }
  }

  return (
    <div className={className || ''}>
      <ul className={styles.list}>
        <li className={styles.filters__item}>
          <PriceFilter searchParams={searchParams} setSearchParams={setSearchParams} />
        </li>
        <li className={styles.filters__item}>
          <BrandFilter searchParams={searchParams} setSearchParams={setSearchParams} />
        </li>
        <li className={styles.filters__item}>
          <ColorFilter searchParams={searchParams} setSearchParams={setSearchParams} />
        </li>
        <li className={styles.filters__item}>
          <SizeFilter searchParams={searchParams} setSearchParams={setSearchParams} />
        </li>
      </ul>
      <div className={styles.filters__wrapper}>
        {isShowResults && (
          <button type="button" onClick={onClick} className={styles.filters__results}>
            Show Results
          </button>
        )}
        <button type="button" onClick={handleClick} className={styles.filters__btn}>
          Clear filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
