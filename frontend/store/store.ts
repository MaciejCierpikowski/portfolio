import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authSilce";
import { userListSlice } from "./authSliceTest";

export const store = configureStore({
  reducer: {
    userList: userListSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
