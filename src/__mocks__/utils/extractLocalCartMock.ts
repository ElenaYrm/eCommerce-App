import { Cart } from '@commercetools/platform-sdk';
import { ICart } from '../../store/cart/types';

export const cartMock: Cart = {
  id: 'edbf8b7a-aa68-4379-bb1d-9e6ed7d725d2',
  version: 4,
  createdAt: '2023-09-15T12:32:24.278Z',
  lastModifiedAt: '2023-09-15T12:32:24.475Z',
  lastModifiedBy: {
    clientId: 'j_yucI-j56zVM3IHDqo7Cfxi',
    customer: {
      typeId: 'customer',
      id: '7a742b9f-8bb9-46cb-867f-03a646a49fbd',
    },
  },
  createdBy: {
    clientId: 'j_yucI-j56zVM3IHDqo7Cfxi',
    customer: {
      typeId: 'customer',
      id: '7a742b9f-8bb9-46cb-867f-03a646a49fbd',
    },
  },
  customerId: '7a742b9f-8bb9-46cb-867f-03a646a49fbd',
  lineItems: [
    {
      id: '48a0c84f-ce9a-4a0a-aed5-0e10c3fd28d8',
      productId: 'baf7b9e0-79e2-47f0-bb21-aa6beb7796c5',
      name: {
        'en-US': 'Rest',
      },
      productType: {
        typeId: 'product-type',
        id: 'a7e4da6b-8b8f-41d5-8d54-61d36425be6a',
      },
      productSlug: {
        'en-US': 'rest',
      },
      variant: {
        id: 1,
        sku: 'Pain-Mod-01',
        prices: [
          {
            id: '3f301915-39ac-4109-9aa4-18a730a13be3',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 900000,
              fractionDigits: 2,
            },
            country: 'US',
          },
        ],
        images: [
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/bob-nosa-01-1-uolcjeB4.jpg',
            label: 'bob-nosa-01-1',
            dimensions: {
              w: 1800,
              h: 2200,
            },
          },
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/bob-nosa-01-2-roGwMeWz.jpg',
            label: 'bob-nosa-01-2',
            dimensions: {
              w: 1800,
              h: 2200,
            },
          },
          {
            url: 'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/bob-nosa-01-3-3mZ_n6CE.jpg',
            label: 'bob-nosa-01-3',
            dimensions: {
              w: 1800,
              h: 2200,
            },
          },
        ],
        attributes: [
          {
            name: 'artist',
            value: {
              'en-US': 'Bob-nosa',
            },
          },
          {
            name: 'color',
            value: {
              'en-US': 'grey',
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
              'en-US': '2022',
            },
          },
          {
            name: 'medium',
            value: {
              'en-US': 'Oil on canvas',
            },
          },
          {
            name: 'dimensions',
            value: {
              'en-US': '180 x 180 cm',
            },
          },
        ],
        assets: [],
      },
      price: {
        id: '3f301915-39ac-4109-9aa4-18a730a13be3',
        value: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 900000,
          fractionDigits: 2,
        },
        country: 'US',
      },
      quantity: 1,
      discountedPricePerQuantity: [],
      perMethodTaxRate: [],
      addedAt: '2023-09-15T12:32:24.451Z',
      lastModifiedAt: '2023-09-15T12:32:24.451Z',
      state: [
        {
          quantity: 1,
          state: {
            typeId: 'state',
            id: 'abca45cf-d2f5-496d-8d86-1a620d5407aa',
          },
        },
      ],
      priceMode: 'Platform',
      lineItemMode: 'Standard',
      totalPrice: {
        type: 'centPrecision',
        currencyCode: 'USD',
        centAmount: 900000,
        fractionDigits: 2,
      },
      taxedPricePortions: [],
    },
  ],
  cartState: 'Active',
  totalPrice: {
    type: 'centPrecision',
    currencyCode: 'USD',
    centAmount: 900000,
    fractionDigits: 2,
  },
  country: 'US',
  shippingMode: 'Single',
  shipping: [],
  customLineItems: [],
  discountCodes: [],
  directDiscounts: [],
  inventoryMode: 'None',
  taxMode: 'Platform',
  taxRoundingMode: 'HalfEven',
  taxCalculationMode: 'LineItemLevel',
  deleteDaysAfterLastModification: 90,
  refusedGifts: [],
  origin: 'Customer',
  itemShippingAddresses: [],
  totalLineItemQuantity: 1,
};

export const localCartMock: ICart = {
  id: 'edbf8b7a-aa68-4379-bb1d-9e6ed7d725d2',
  version: 4,
  lineItems: [
    {
      itemId: '48a0c84f-ce9a-4a0a-aed5-0e10c3fd28d8',
      productId: 'baf7b9e0-79e2-47f0-bb21-aa6beb7796c5',
      name: 'Rest',
      artist: 'Bob-nosa',
      image:
        'https://f4d041cb597b544d8a51-9f3917450bea295535e6c9414a5b041f.ssl.cf3.rackcdn.com/bob-nosa-01-1-uolcjeB4.jpg',
      quantity: 1,
      price: 900000,
      discountedPrice: 0,
      totalPrice: 900000,
    },
  ],
  totalPrice: 900000,
  totalQuantity: 1,
  codes: [],
};
