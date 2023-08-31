import { QueryParam } from '@commercetools/sdk-client-v2';
import { SearchParams } from '../store/product-list/types';
import { LANG_CODE } from '../constant';

export function getSearchParams(search: URLSearchParams): { [p: string]: QueryParam } {
  const queryArgs: { [p: string]: QueryParam } = {};
  const filters: string[] = [];
  const sort: string[] = [];

  if (search.get(SearchParams.Search)) {
    queryArgs['text.en-US'] = '${search}';
  }

  if (search.get(SearchParams.Category)) {
    const value = search.get(SearchParams.Category);
    filters.push(`categories.id:subtree('${value}')`);
  }

  if (search.get(SearchParams.Color)) {
    const value = search.get(SearchParams.Color);
    filters.push(`variants.attributes.${SearchParams.Color}:"${value}"`);
  }

  if (search.get(SearchParams.Brand)) {
    const value = search.get(SearchParams.Brand);
    filters.push(`variants.attributes.${SearchParams.Brand}.${LANG_CODE}:"${value}"`);
  }

  if (search.get(SearchParams.Size)) {
    const value = search.get(SearchParams.Size);
    filters.push(`variants.attributes.${SearchParams.Size}.${LANG_CODE}:"${value}"`);
  }

  if (filters.length > 0) {
    queryArgs.filter = filters.join('&');
  }

  if (sort.length > 0) {
    queryArgs.sort = sort;
  }

  return queryArgs;
}
