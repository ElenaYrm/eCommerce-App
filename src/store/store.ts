import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authReducer } from './auth/slice';
import { productReducer } from './product/slice';
import { productListReducer } from './product-list/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    productList: productListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
