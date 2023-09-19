import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authReducer } from './auth/slice';
import { productReducer } from './product/slice';
import { catalogReducer } from './catalog/slice';
import { userReducer } from './user/slice';
import { cartReducer } from './cart/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    catalog: catalogReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
