import { createSlice } from '@reduxjs/toolkit';
import { initialUserState } from '../../../constant';
import { getUserThunk, setDefaultAddressIdThunk, updPasswordThunk, updUserThunk } from '../thunks';
import { removeAddressThunk } from '../thunks';
import { addNewAddressThunk } from '../thunks';
import { changeAddressThunk } from '../thunks';

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    resetEditError: (state): void => {
      state.editStatus = 'initial';
      state.editError = '';
    },
    deleteSuccessState: (state): void => {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.user = payload;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      })
      .addCase(updUserThunk.pending, (state) => {
        state.editStatus = 'loading';
        state.editError = '';
        state.isSuccess = false;
      })
      .addCase(updUserThunk.fulfilled, (state, { payload }) => {
        state.editStatus = 'success';
        state.user = payload;
        state.isSuccess = true;
      })
      .addCase(updUserThunk.rejected, (state, { payload }) => {
        state.editStatus = 'error';
        state.editError = payload || 'Something was wrong';
      })
      .addCase(updPasswordThunk.pending, (state) => {
        state.editStatus = 'loading';
        state.editError = '';
        state.isSuccess = false;
      })
      .addCase(updPasswordThunk.fulfilled, (state, { payload }) => {
        state.editStatus = 'success';
        state.user = payload;
        state.isSuccess = true;
      })
      .addCase(updPasswordThunk.rejected, (state, { payload }) => {
        state.editStatus = 'error';
        state.editError = payload || 'Something was wrong';
      })
      .addCase(removeAddressThunk.pending, (state) => {
        state.editStatus = 'loading';
        state.editError = '';
        state.isSuccess = false;
      })
      .addCase(removeAddressThunk.fulfilled, (state, { payload }) => {
        state.editStatus = 'success';
        state.user = payload;
        state.isSuccess = true;
      })
      .addCase(removeAddressThunk.rejected, (state, { payload }) => {
        state.editStatus = 'error';
        state.editError = payload || 'Something was wrong';
      })
      .addCase(addNewAddressThunk.pending, (state) => {
        state.editStatus = 'loading';
        state.editError = '';
        state.isSuccess = false;
      })
      .addCase(addNewAddressThunk.fulfilled, (state, { payload }) => {
        state.editStatus = 'success';
        state.user = payload;
        state.isSuccess = true;
      })
      .addCase(addNewAddressThunk.rejected, (state, { payload }) => {
        state.editStatus = 'error';
        state.editError = payload || 'Something was wrong';
      })
      .addCase(changeAddressThunk.pending, (state) => {
        state.editStatus = 'loading';
        state.editError = '';
        state.isSuccess = false;
      })
      .addCase(changeAddressThunk.fulfilled, (state, { payload }) => {
        state.editStatus = 'success';
        state.user = payload;
        state.isSuccess = true;
      })
      .addCase(changeAddressThunk.rejected, (state, { payload }) => {
        state.editStatus = 'error';
        state.editError = payload || 'Something was wrong';
      })
      .addCase(setDefaultAddressIdThunk.pending, (state) => {
        state.editStatus = 'loading';
        state.editError = '';
        state.isSuccess = false;
      })
      .addCase(setDefaultAddressIdThunk.fulfilled, (state, { payload }) => {
        state.editStatus = 'success';
        state.user = payload;
        state.isSuccess = true;
      })
      .addCase(setDefaultAddressIdThunk.rejected, (state, { payload }) => {
        state.editStatus = 'error';
        state.editError = payload || 'Something was wrong';
      });
  },
});

export const userReducer = userSlice.reducer;
export const { resetEditError, deleteSuccessState } = userSlice.actions;
