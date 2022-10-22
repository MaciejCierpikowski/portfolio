import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../types/user";

interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export const register = createAsyncThunk<
  User,
  { id: string } & Partial<User>,
  {
    rejectValue: ValidationErrors;
  }
>("/api/user/register", async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/api/user/profile`, userData);
    return data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});
