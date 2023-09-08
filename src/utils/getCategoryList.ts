import { Category } from '@commercetools/platform-sdk';
import { ICategoryFilterItem } from '../components/Filters/types';
import { LANG_CODE } from '../constant';

export function getCategoryList(results: Category[]): ICategoryFilterItem[] {
  const categories: ICategoryFilterItem[] = [];
  if (results.length > 0) {
    results.forEach((item) => {
      categories.push({
        label: item.name[LANG_CODE],
        value: item.id,
        parent: item.parent ? item.parent.id : null,
      });
    });
  }
  return categories;
}
