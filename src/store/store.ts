import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authReducer } from './auth/slice';
import { productReducer } from './product/slice';
import { catalogReducer } from './catalog/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
