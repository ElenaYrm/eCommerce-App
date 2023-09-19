import { ReactElement } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/catalog/selectors';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { SearchParams } from '../../types/enums';
import { ICategoryFilterItem } from '../Filters/types';

import styles from './breadcrumbs.module.scss';

function Breadcrumbs(): ReactElement {
  const categories = useSelector(selectCategories);
  const [searchParams] = useSearchParams();

  const category = categories.find((item) => item.value === searchParams.get(SearchParams.Category));
  const isSubcategory = !!category?.parent;
  let parentCategory: ICategoryFilterItem | undefined = undefined;
  if (isSubcategory) {
    parentCategory = categories.find((item) => item.value === category?.parent);
  }

  return (
    <div className={styles.crumbs}>
      <ul className={styles.crumbs__list}>
        <li>
          <Link to={PATH[Page.Home]} className={styles.crumbs__link}>
            <span>Home</span>
            <span className={styles.crumbs__separator}> / </span>
          </Link>
        </li>
        <li>
          <Link to={PATH[Page.Catalog]} className={styles.crumbs__link}>
            <span>Catalog</span>
            {category && <span className={styles.crumbs__separator}> / </span>}
          </Link>
        </li>
        {category && (
          <li>
            <Link
              to={`${PATH[Page.Catalog]}?category=${isSubcategory ? parentCategory?.value : category.value}`}
              className={styles.crumbs__link}
            >
              <span>{isSubcategory ? parentCategory?.label : category.label}</span>
              {isSubcategory && <span className={styles.crumbs__separator}> / </span>}
            </Link>
          </li>
        )}
        {isSubcategory && (
          <li>
            <span className={styles.crumbs__link}>{category?.label}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
