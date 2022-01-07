import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.error = null;
      state.loading = true;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [authOperations.register.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
      state.loading = false;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.loading = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
      state.loading = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, number: null };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.loading = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.loading = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
