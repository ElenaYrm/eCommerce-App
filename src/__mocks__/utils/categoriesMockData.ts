import { Category } from '@commercetools/platform-sdk';
import { ICategoryFilterItem } from '../../components/Filters/types';

export const categoriesMockData: Category[] = [
  {
    id: '86247e4a-9981-462b-9799-8e5505bf077b',
    version: 2,
    createdAt: '2023-08-29T05:37:33.572Z',
    lastModifiedAt: '2023-08-29T05:40:31.529Z',
    key: 'paint',
    name: {
      'en-US': 'Paintings',
    },
    slug: {
      'en-US': 'paintings',
    },
    description: {
      'en-US': 'Explore an extensive selection of original paintings for sale or available to rent',
    },
    ancestors: [],
    orderHint: '0.1',
    assets: [],
  },
  {
    id: 'a148abd4-552a-4ff0-87e4-b67ca25c84e2',
    version: 5,
    createdAt: '2023-08-29T05:40:10.841Z',
    lastModifiedAt: '2023-08-31T11:40:24.651Z',
    key: 'p-modern',
    name: {
      'en-US': 'Modern',
    },
    slug: {
      'en-US': 'pop-art',
    },
    description: {
      'en-US':
        'Discover Modern paintings for sale online in Scoop Art’s showcase of some of the best contemporary Modern painters working today.',
    },
    ancestors: [
      {
        typeId: 'category',
        id: '86247e4a-9981-462b-9799-8e5505bf077b',
      },
    ],
    parent: {
      typeId: 'category',
      id: '86247e4a-9981-462b-9799-8e5505bf077b',
    },
    orderHint: '0.2',
    assets: [],
  },
];

export const localCategoriesMock: ICategoryFilterItem[] = [
  {
    label: 'Paintings',
    value: '86247e4a-9981-462b-9799-8e5505bf077b',
    parent: null,
  },
  {
    label: 'Modern',
    value: 'a148abd4-552a-4ff0-87e4-b67ca25c84e2',
    parent: '86247e4a-9981-462b-9799-8e5505bf077b',
  },
];
