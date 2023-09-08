import { SetURLSearchParams } from 'react-router-dom';

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
  isShowResults: boolean;
  className?: string;
}

export interface FilterTypeProps {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  className?: string;
}
