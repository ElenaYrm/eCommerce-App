import { ReactElement } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/catalog/selectors';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { SearchParams } from '../../types/enums';
import { changeParams } from '../../utils';
import { ICategoryFilterItem } from '../Filters/types';

import styles from './breadcrumbs.module.scss';

function Breadcrumbs(): ReactElement {
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = categories.find((item) => item.value === searchParams.get(SearchParams.Category));
  const isSubcategory = !!category?.parent;
  let parentCategory: ICategoryFilterItem | undefined = undefined;
  if (isSubcategory) {
    parentCategory = categories.find((item) => item.value === category?.parent);
  }

  function deleteCategory(): void {
    changeParams(setSearchParams, '', SearchParams.Category);
  }

  function updateCategory(): void {
    changeParams(setSearchParams, parentCategory?.value || '', SearchParams.Category);
  }

  return (
    <div className={styles.crumbs}>
      <ul className={styles.crumbs__list}>
        <li>
          <button type="button" onClick={(): void => navigate(PATH[Page.Home])}>
            <span>Home</span>
            <span>&gt;</span>
          </button>
        </li>
        <li>
          <button type="button" onClick={deleteCategory}>
            <span>Catalog</span>
            {category && <span>&gt;</span>}
          </button>
        </li>
        {category && (
          <li>
            <button type="button" disabled={!isSubcategory} onClick={updateCategory}>
              <span>{isSubcategory ? parentCategory?.label : category.label}</span>
              {isSubcategory && <span>&gt;</span>}
            </button>
          </li>
        )}
        {isSubcategory && (
          <li>
            <button type="button" disabled={true}>
              <span>{category?.label}</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
