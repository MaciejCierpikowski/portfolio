import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, RootState } from "./store";
import { Contact } from "../types/contact";
import { API_URL } from "../utils/constans";

export interface IContact {
  isProcessingRequest: boolean;
  error?: string;
  success: boolean;
}

const initialState: IContact = { isProcessingRequest: false, success: false };

export const contactSlice = createSlice({
  name: "contact",
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
        success: true,
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
        isProcessingRequest: false,
        success: false,
      };
    },
  },
});

export const addContact =
  (contactData: Contact) => async (dispatch: AppDispatch) => {
    try {
      dispatch(start());

      const { data } = await axios.post(API_URL + "api/contacts", {
        data: contactData,
      });

      if (data) {
        dispatch(success(data));
      }
    } catch (err: any) {
      dispatch(error(err?.response?.data?.error?.message));
    }
  };

export const { start, success, error } = contactSlice.actions;
export const selectAuthentication = (state: RootState) => state.contact;
export const contactReducer = contactSlice.reducer;
