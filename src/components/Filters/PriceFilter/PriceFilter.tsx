import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import classnames from 'classnames';
import { SearchParams } from '../../../types/enums';
import { useDebounce } from '../../../hooks';
import { changeParams } from '../../../utils';
import { FilterTypeProps } from '../types';

import styles from './priceFilter.module.scss';

function PriceFilter({ searchParams, setSearchParams, className }: FilterTypeProps): ReactElement {
  const [from, setFrom] = useState(searchParams.get(SearchParams.PriceFrom) || '');
  const [to, setTo] = useState(searchParams.get(SearchParams.PriceTo) || '');

  const debounceChangeParams = useDebounce(changeParams, 400);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const field = event.target.name;
    const newValue = event.target.value;
    if (field === 'from') {
      setFrom(newValue);
      debounceChangeParams(setSearchParams, newValue, SearchParams.PriceFrom);
    } else {
      setTo(newValue);
      debounceChangeParams(setSearchParams, newValue, SearchParams.PriceTo);
    }
  }

  useEffect(() => {
    setFrom(searchParams.get(SearchParams.PriceFrom) || '');
    setTo(searchParams.get(SearchParams.PriceTo) || '');
  }, [searchParams]);

  return (
    <div className={classnames(styles.price, className || '')}>
      <h3 className={styles.price__title}>Price</h3>
      <form className={styles.price__form}>
        <label className={styles.price__item}>
          <span className="visually-hidden">Price from</span>
          <input
            type="number"
            value={from}
            placeholder="from"
            name="from"
            onChange={handleChange}
            className={styles.price__input}
          />
        </label>
        <label className={styles.price__item}>
          <span className="visually-hidden">Price to</span>
          <input
            type="number"
            value={to}
            placeholder="to"
            name="to"
            onChange={handleChange}
            className={styles.price__input}
          />
        </label>
      </form>
    </div>
  );
}

export default PriceFilter;
