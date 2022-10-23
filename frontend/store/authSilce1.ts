import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from '../store/store';
import { User } from '../types/user';


export interface IAuthentication {
  isProcessingRequest: boolean;
  accessToken?: string;
}
const initialState: IAuthentication = { isProcessingRequest: false };
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});

export const authenticateUser = (userData: User) => async (dispatch: AppDispatch) => {
  try {
    const {data} = await axios.post('http://localhost:1337/auth/local', userData);
    dispatch(success(data));
  } catch (err: any) {
    dispatch(error(err));
  }
};
export const { start, success, error } = authenticationSlice.actions;
export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;
