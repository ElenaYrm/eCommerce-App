import { SetURLSearchParams } from 'react-router-dom';
import { SearchParams } from '../../../types/enums.ts';

export interface IFilterItem {
  label: string;
  value: string;
}

export interface IColorFilterItem extends IFilterItem {
  color: string;
}

export interface ICategoryFilterItem extends IFilterItem {
  parent: string | null;
}

export interface FiltersProps {
  onClick: () => void;
  className?: string;
}

export interface FilterTypeProps {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  className?: string;
}

export interface CheckboxFilterProps extends FilterTypeProps {
  field: SearchParams;
  filters: IFilterItem[];
  name: string;
}
