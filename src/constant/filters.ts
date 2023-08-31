import { ICategoryFilterItem, IColorFilterItem, IFilterItem } from '../components/Filters/types';

export const sizes: IFilterItem[] = [
  {
    label: 'Small (under 40cm)',
    value: 'small',
  },
  {
    label: 'Medium (40-100cm)',
    value: 'medium',
  },
  {
    label: 'Large (over 100cm)',
    value: 'large',
  },
];

export const colors: IColorFilterItem[] = [
  {
    label: 'Green',
    value: 'green',
    color: '#008000',
  },
  {
    label: 'Black',
    value: 'black',
    color: '#000000',
  },
  {
    label: 'Red',
    value: 'red',
    color: '#ff0000',
  },
];

export const brands: IFilterItem[] = [
  {
    label: 'Sculp',
    value: 'Sculp',
  },
  {
    label: 'Brand #2',
    value: 'brand-2',
  },
  {
    label: 'Brand #3',
    value: 'brand-3',
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

export const categories: ICategoryFilterItem[] = [
  {
    label: 'Paintings',
    value: '86247e4a-9981-462b-9799-8e5505bf077b',
    children: [
      {
        label: 'Pop Art',
        value: 'a148abd4-552a-4ff0-87e4-b67ca25c84e2',
      },
      {
        label: 'Abstract',
        value: '4fadf07c-0620-46d9-b593-eaf0a5ca2636',
      },
    ],
  },
  {
    label: 'Sculpture',
    value: 'fc0e4596-ef04-4b3b-ac07-1547eba2b93f',
    children: [
      {
        label: 'Geometric',
        value: '2aff8899-5345-4a34-a711-30fbbe158581',
      },
      {
        label: 'Conceptual',
        value: '7c3b2d08-a680-4192-9a13-0ed59f2c5e15',
      },
    ],
  },
];
