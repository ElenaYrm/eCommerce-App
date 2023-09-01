import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, extractLocalUser } from '../../../utils';
import { IUser } from '../../../types/interfaces';
import { IUserSlice } from '../types';
import { getCustomer } from '../../../services/sdk/customer/methods';

export const updUserThunk = createAsyncThunk<
  IUser, //Вернет при успешном выполнении запроса
  void, // тип аргументов которые принимает эта функция
  { // этот объект можно копировать
    state: { user: IUserSlice };
    rejectValue: string;
  }
>( // Все что в <> это дженерики - удалить коммент после
  'auth/getCustomerThunk', // Здесь нужно поменять на user/ название thunk на примере этого "getUserThunk"
  async (_, { rejectWithValue }) => {
    try {
      const user = await getCustomer();
      return extractLocalUser(user.body); // обновить саму функцию extractLocalUser чтобы возвращала в тот вид который нам нужен, а нужен нам IUser
    } catch (error: unknown) { // catch можно весь скопировать просто
      return rejectWithValue(checkError(error));
    }
  },
  {
    condition: (_, { getState }): boolean => { // этот блок можно весь скопировать
      const {
        user: { status },
      } = getState();

      return !(status === 'loading');
    },
  },
);
