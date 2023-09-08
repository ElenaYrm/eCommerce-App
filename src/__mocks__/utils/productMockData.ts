import { Product } from '@commercetools/platform-sdk';
import { IProduct } from '../../types/interfaces.ts';

export const productMockData: Product = {
  id: 'e755fe7e-855c-4f33-9524-ec25c9583d6c',
  version: 35,
  createdAt: '2023-08-31T14:01:28.355Z',
  lastModifiedAt: '2023-09-01T18:53:05.212Z',
  productType: {
    typeId: 'product-type',
    id: 'a7e4da6b-8b8f-41d5-8d54-61d36425be6a',
  },
  masterData: {
    current: {
      name: {
        'en-US': 'Four Foot Companion (Black)',
      },
      description: {
        'en-US': 'Some description',
      },
      categories: [
        {
          typeId: 'category',
          id: '7c3b2d08-a680-4192-9a13-0ed59f2c5e15',
        },
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'four-foot-companion-black',
      },
      metaTitle: {
        'en-US': '',
      },
      metaDescription: {
        'en-US': '',
      },
      masterVariant: {
        id: 1,
        sku: 'Sculp-Pop-02',
        prices: [
          {
            id: 'c8b0f0ad-be68-449c-ac57-cf34b6177a93',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 8000000,
              fractionDigits: 2,
            },
            country: 'US',
            discounted: {
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 7200000,
                fractionDigits: 2,
              },
              discount: {
                typeId: 'product-discount',
                id: 'a03a5274-4eaa-4e10-81d1-02a3cf74e66d',
              },
            },
          },
        ],
        images: [
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-3-4JKj0VaT.jpg',
            label: 'kaws-01-3',
            dimensions: {
              w: 1800,
              h: 2200,
            },
          },
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-2-iywrwOAk.jpg',
            label: 'kaws-01-2',
            dimensions: {
              w: 1800,
              h: 2200,
            },
          },
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-1-44-kd6dP.jpg',
            label: 'kaws-01-1',
            dimensions: {
              w: 1800,
              h: 2200,
            },
          },
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-4-PQlIlbhK.jpg',
            label: 'kaws-01-4',
            dimensions: {
              w: 2200,
              h: 1800,
            },
          },
        ],
        attributes: [
          {
            name: 'artist',
            value: {
              'en-US': 'KAWS',
            },
          },
          {
            name: 'color',
            value: {
              'en-US': 'black',
            },
          },
          {
            name: 'size',
            value: {
              'en-US': 'Medium',
            },
          },
          {
            name: 'year',
            value: {
              'en-US': '2007',
            },
          },
          {
            name: 'medium',
            value: {
              'en-US': 'Painted Cast Vinyl',
            },
          },
          {
            name: 'dimensions',
            value: {
              'en-US': '127 × 55.9 × 35.6 cm',
            },
          },
        ],
        assets: [],
      },
      variants: [],
      searchKeywords: {},
    },
    staged: {
      name: {
        'en-US': 'Four Foot Companion (Black)',
      },
      description: {
        'en-US':
          'Brian Donnelly (b. 1974) studied illustration at the School of Visual Arts in New York. Before he achieved success as an artist he worked as a background painter on animated series such as Disney’s 101 Dalmations, and cult shows Daria  and Doug. From an early age Donnelly was known for marking buildings in New Jersey and Manhattan with ‘KAWS’, a tag he chose because he liked the way the letters looked together. He soon moved on from this simple tag, however, and developed a unique style that involved adding cartoon-like figures to bus-shelter advertisements. In 1999 KAWS visited Japan after being approached by Bounty Hunter, the cult toy and streetwear brand. He would go on to create his first toy, ‘COMPANION’. Produced in an edition of 500, the toys sold out almost immediately, and COMPANION became a recurring figure in KAWS’s work.',
      },
      categories: [
        {
          typeId: 'category',
          id: '7c3b2d08-a680-4192-9a13-0ed59f2c5e15',
        },
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'four-foot-companion-black',
      },
      metaTitle: {
        'en-US': '',
      },
      metaDescription: {
        'en-US': '',
      },
      masterVariant: {
        id: 1,
        sku: 'Sculp-Pop-02',
        prices: [
          {
            id: 'c8b0f0ad-be68-449c-ac57-cf34b6177a93',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 8000000,
              fractionDigits: 2,
            },
            country: 'US',
            discounted: {
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 7200000,
                fractionDigits: 2,
              },
              discount: {
                typeId: 'product-discount',
                id: 'a03a5274-4eaa-4e10-81d1-02a3cf74e66d',
              },
            },
          },
        ],
        images: [
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-3-4JKj0VaT.jpg',
            label: 'kaws-01-3',
            dimensions: {
              w: 1800,
              h: 2200,
            },
          },
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-2-iywrwOAk.jpg',
            label: 'kaws-01-2',
            dimensions: {
              w: 1800,
              h: 2200,
            },
          },
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-1-44-kd6dP.jpg',
            label: 'kaws-01-1',
            dimensions: {
              w: 1800,
              h: 2200,
            },
          },
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-4-PQlIlbhK.jpg',
            label: 'kaws-01-4',
            dimensions: {
              w: 2200,
              h: 1800,
            },
          },
        ],
        attributes: [
          {
            name: 'artist',
            value: {
              'en-US': 'KAWS',
            },
          },
          {
            name: 'color',
            value: {
              'en-US': 'black',
            },
          },
          {
            name: 'size',
            value: {
              'en-US': 'Medium',
            },
          },
          {
            name: 'year',
            value: {
              'en-US': '2007',
            },
          },
          {
            name: 'medium',
            value: {
              'en-US': 'Painted Cast Vinyl',
            },
          },
          {
            name: 'dimensions',
            value: {
              'en-US': '127 × 55.9 × 35.6 cm',
            },
          },
        ],
        assets: [],
      },
      variants: [],
      searchKeywords: {},
    },
    published: true,
    hasStagedChanges: false,
  },
  priceMode: 'Embedded',
};

export const localProductMock: IProduct = {
  artist: 'KAWS',
  title: 'Four Foot Companion (Black)',
  year: '2007',
  medium: 'Painted Cast Vinyl',
  dimensions: '127 × 55.9 × 35.6 cm',
  color: 'black',
  size: 'Medium',
  description: 'Some description',
  images: [
    'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-3-4JKj0VaT.jpg',
    'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-2-iywrwOAk.jpg',
    'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-1-44-kd6dP.jpg',
    'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/kaws-01-4-PQlIlbhK.jpg',
  ],
  price: 80000,
  discountPrice: 72000,
  productId: 'e755fe7e-855c-4f33-9524-ec25c9583d6c',
};
