import { IColorFilterItem, IFilterItem } from '../components/Filters/types';

export const sizes: IFilterItem[] = [
  {
    label: 'Small (under 40cm)',
    value: 'Small',
  },
  {
    label: 'Medium (40-100cm)',
    value: 'Medium',
  },
  {
    label: 'Large (over 100cm)',
    value: 'Large',
  },
];

export const colors: IColorFilterItem[] = [
  {
    label: 'Black',
    value: 'black',
    color: '#000000',
  },
  {
    label: 'Blue',
    value: 'blue',
    color: '#0000ff',
  },
  {
    label: 'Colorful',
    value: 'colorful',
    color: '#ffc56b',
  },
  {
    label: 'Grey',
    value: 'grey',
    color: '#808080',
  },
  {
    label: 'Pink',
    value: 'pink',
    color: '#ffc0cb',
  },
  {
    label: 'Red',
    value: 'red',
    color: '#ff0000',
  },
  {
    label: 'White',
    value: 'white',
    color: '#ffffff',
  },
];

export const brands: IFilterItem[] = [
  {
    label: 'Anish Kapoor',
    value: 'Anish Kapoor',
  },
  {
    label: 'Austin Lee',
    value: 'Austin Lee',
  },
  {
    label: 'Bob-nosa',
    value: 'Bob-nosa',
  },
  {
    label: 'Cédrix Crespel',
    value: 'Cédrix Crespel',
  },
  {
    label: 'Jef Verheyen',
    value: 'Jef Verheyen',
  },
  {
    label: 'Joan Mitchell',
    value: 'Joan Mitchell',
  },
  {
    label: 'KAWS',
    value: 'KAWS',
  },
  {
    label: 'Lester Johnson',
    value: 'Lester Johnson',
  },
  {
    label: 'Masoami RAKU',
    value: 'Masoami RAKU',
  },
  {
    label: 'Richard Diebenkorn',
    value: 'Richard Diebenkorn',
  },
];

export const sorting: IFilterItem[] = [
  {
    label: 'Our Picks',
    value: '',
  },
  {
    label: 'Name: A-Z',
    value: 'name.en-US asc',
  },
  {
    label: 'Name: Z-A',
    value: 'name.en-US desc',
  },
  {
    label: 'Price: low to high',
    value: 'price asc',
  },
  {
    label: 'Price: high to low',
    value: 'price desc',
  },
];
