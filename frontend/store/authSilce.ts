import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, RootState } from "./store";
import { User } from "../types/user";

export interface IAuthentication {
  isProcessingRequest: boolean;
  accessToken?: string;
  error?: string;
}

const initialState: IAuthentication = { isProcessingRequest: false };

export const authenticationSlice = createSlice({
  name: "authentication",
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
        error: action.payload,
        isProcessingRequest: false,
      };
    },
  },
});

export const authenticateUser =
  (userData: User) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.post(
        process.env.API_HOST + "/api/auth/local/register",
        userData
      );
      dispatch(success(data));
    } catch (err: any) {
      dispatch(error(err?.response?.data?.error?.message));
    }
  };
export const { start, success, error } = authenticationSlice.actions;
export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;
