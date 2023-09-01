import { QueryParam } from '@commercetools/platform-sdk';
import { SearchParams } from '../types/enums';

export function getSearchParams(search: URLSearchParams): { [p: string]: QueryParam } {
  const queryArgs: { [p: string]: QueryParam } = {};

  if (search.get(SearchParams.Search)) {
    queryArgs['text.en-US'] = `'${search}'`;
  }

  const filters: string[] = [];
  if (search.get(SearchParams.Category)) {
    const value = search.get(SearchParams.Category);
    filters.push(`categories.id: subtree("${value}")`);
  }
  if (search.get(SearchParams.Color)) {
    const value = search.get(SearchParams.Color);
    filters.push(`variants.attributes.${SearchParams.Color}.en-US:"${value?.split(',').join('","')}"`);
  }
  if (search.get(SearchParams.Brand)) {
    const value = search.get(SearchParams.Brand);
    filters.push(`variants.attributes.${SearchParams.Brand}.en-US:"${value?.split(',').join('","')}"`);
  }
  if (search.get(SearchParams.Size)) {
    const value = search.get(SearchParams.Size);
    filters.push(`variants.attributes.${SearchParams.Size}.en-US:"${value?.split(',').join('","')}"`);
  }
  if (search.get(SearchParams.PriceFrom) || search.get(SearchParams.PriceTo)) {
    const from = search.get(SearchParams.PriceFrom);
    const to = search.get(SearchParams.PriceTo);
    filters.push(`variants.price.centAmount:range (${Number(from) * 100 || '*'} to ${Number(to) * 100 || '*'})`);
  }
  if (filters.length > 0) {
    queryArgs.filter = filters;
  }

  if (search.get(SearchParams.Sort)) {
    const value = search.get(SearchParams.Sort);
    queryArgs.sort = [value || ''];
    queryArgs.fuzzy = true;
  }

  return queryArgs;
}
