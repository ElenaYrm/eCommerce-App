import { SetURLSearchParams } from 'react-router-dom';
import { SearchParams } from '../types/enums';
export function changeParams(setSearchParams: SetURLSearchParams, value: string, field: SearchParams): void {
  if (value) {
    setSearchParams((searchParams) => {
      searchParams.set(field, value);
      return searchParams;
    });
  } else {
    setSearchParams((searchParams) => {
      searchParams.delete(field);
      return searchParams;
    });
  }
}
