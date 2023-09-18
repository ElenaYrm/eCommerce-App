import { RootState } from '../../store/store';
import { initialAuthSliceMock } from './authSliceMock';
import { initialProductSliceMock } from './productSliceMock';
import { initialCatalogSliceMock } from './catalogSliceMock';
import { initialUserSliceMock } from './userSliceMock';
import { initialCartSliceMock } from './cartSliceMock';

export const storeMock: RootState = {
  auth: initialAuthSliceMock,
  product: initialProductSliceMock,
  catalog: initialCatalogSliceMock,
  user: initialUserSliceMock,
  cart: initialCartSliceMock,
};
