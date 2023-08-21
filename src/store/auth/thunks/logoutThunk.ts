import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialTokenInfo, tokenData } from '../../../services/sdk/auth/token';

export const logoutThunk = createAsyncThunk('auth/logoutThunk', (): void => {
  localStorage.removeItem('access-token');
  tokenData.set(initialTokenInfo);
});
