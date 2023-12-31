import React, { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { selectCategories } from '../../../store/catalog/selectors';
import { useAppDispatch } from '../../../store/store';
import { categoriesThunk, productListThunk } from '../../../store/catalog/thunks';
import { SearchParams } from '../../../types/enums';
import { changeParams, getSearchParams } from '../../../utils';
import { FilterTypeProps } from '../types';
import { CategoryItem } from './CategoryItem';

import styles from './categoryFilter.module.scss';

function CategoryFilter({ searchParams, setSearchParams, className }: FilterTypeProps): ReactElement {
  const categories = useSelector(selectCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(categoriesThunk());
    }
  }, [categories, dispatch]);

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    changeParams(setSearchParams, event.currentTarget.dataset.id || '', SearchParams.Category);
    changeParams(setSearchParams, '1', SearchParams.Page);
    dispatch(productListThunk({ params: getSearchParams(searchParams), list: [] }));
  }

  return (
    <div className={className || ''}>
      <ul className={styles.category__list}>
        {categories.map((item) => (
          <li
            key={item.value}
            className={classnames(styles.category__item, item.parent ? styles.category__item_subcategory : '')}
          >
            <CategoryItem
              value={item.value}
              label={item.label}
              onClick={handleClick}
              isActive={(searchParams.get(SearchParams.Category) || '') === item.value}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;
