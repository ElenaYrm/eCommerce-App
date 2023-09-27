import { RootState } from '../../store';
import { IProductSlice } from '../types';

export const selectProduct = (state: RootState): IProductSlice => state.product;
