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
    filters.push(`variants.attributes.${SearchParams.Color}.en-US:"${value}"`);
  }
  if (search.get(SearchParams.Brand)) {
    const value = search.get(SearchParams.Brand);
    filters.push(`variants.attributes.${SearchParams.Brand}.en-US:"${value}"`);
  }
  if (search.get(SearchParams.Size)) {
    const value = search.get(SearchParams.Size);
    filters.push(`variants.attributes.${SearchParams.Size}.en-US:"${value}"`);
  }
  if (search.get(SearchParams.PriceFrom) || search.get(SearchParams.PriceTo)) {
    const from = search.get(SearchParams.PriceFrom);
    const to = search.get(SearchParams.PriceTo);
    filters.push(`variants.price.centAmount:range (${from || '*'} to ${to || '*'})`);
  }
  if (filters.length > 0) {
    queryArgs.filter = filters;
  }

  if (search.get(SearchParams.Sort)) {
    const value = search.get(SearchParams.Sort);
    queryArgs.sort = [value || ''];
  }

  return queryArgs;

  // sort  queryArgs: { sort: ['name.en-US desc'] }
  //       queryArgs: { sort: ['price asc'] }
  // attr  queryArgs: { filter: `variants.attributes.${attribute}.key.en-US:"${value}"` }
  // price  queryArgs: { filter: `variants.price.centAmount:range (${from || '*'} to ${to || '*'})` }
  // category  queryArgs: { filter: `categories.id:"${idCategory}"` }
  // subcategory queryArgs: { filter: `categories.id: subtree("${idSubCategory}")` }
  // search full word  queryArgs: { 'text.en-US':`'${search}'` }
}
