import { IColorFilterItem, IFilterItem } from '../components/Filters/types';

export const sizes: IFilterItem[] = [
  {
    label: 'Small',
    value: 'Small',
  },
  {
    label: 'Medium',
    value: 'Medium',
  },
  {
    label: 'Large',
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
    label: 'Brown',
    value: 'brown',
    color: '#a52a2a',
  },
  {
    label: 'Colorful',
    value: 'colorful',
    color: '#ffc56b',
  },
  {
    label: 'Green',
    value: 'green',
    color: '#008000',
  },
  {
    label: 'Grey',
    value: 'grey',
    color: '#808080',
  },
  {
    label: 'Orange',
    value: 'orange',
    color: '#ffa500',
  },
  {
    label: 'Pink',
    value: 'pink',
    color: '#ffc0cb',
  },
  {
    label: 'Purple',
    value: 'purple',
    color: '#a020f0',
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
    label: 'Bosco Sodi',
    value: 'Bosco Sodi',
  },
  {
    label: 'Cédrix Crespel',
    value: 'Cédrix Crespel',
  },
  {
    label: 'Chung Chang-Sup',
    value: 'Chung Chang-Sup',
  },
  {
    label: 'Erin Armstrong',
    value: 'Erin Armstrong',
  },
  {
    label: 'Jeff Koons',
    value: 'Jeff Koons',
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
    label: 'John Zabawa',
    value: 'John Zabawa',
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
    label: 'Michel Mouffe',
    value: 'Michel Mouffe',
  },
  {
    label: 'Richard Diebenkorn',
    value: 'Richard Diebenkorn',
  },
  {
    label: 'Squeak Carnwath',
    value: 'Squeak Carnwath',
  },
];

export const sorting: IFilterItem[] = [
  {
    label: 'Recommended',
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
