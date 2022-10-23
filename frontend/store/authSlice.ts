import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../types/user';
import { RootState } from './store';

export interface IUsersList {
  isLoadingUsers: boolean;
  userList?: User[];
}
const initialState: IUsersList = { isLoadingUsers: false };
export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isLoadingUsers: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
        isLoadingUsers: false,
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isLoadingUsers: false,
      };
    },
  },
});
export const fetchUsers = () => async (dispatch: any) => {
  dispatch(start());
  try {
    const {data} = await axios.get('http://localhost:1337/users');;
    dispatch(success({userList : data}));
  } catch (err: any) {
    dispatch(error(err));
  }
};
export const { start, success, error } = userListSlice.actions;
export const selectUserLists = (state: RootState) => state.userList;
export const usersListReducer = userListSlice.reducer;
