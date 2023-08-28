import { createSlice } from '@reduxjs/toolkit';
import { initialProduct } from '../../../constant/initialProduct';

const productSlice = createSlice({
  name: 'product',
  initialState: initialProduct,
  reducers: {
    saveProduct(state, action) {
      state.productId = action.payload.productId;
      state.artist = action.payload.artist;
      state.title = action.payload.title;
      state.year = action.payload.year;
      state.description = action.payload.description;
      state.images = action.payload.images;
      state.price = action.payload.price;
      state.discountPrice = action.payload.discountPrice;
    },
  },
});

export const productReducer = productSlice.reducer;
export const { saveProduct } = productSlice.actions;
