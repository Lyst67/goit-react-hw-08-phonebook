import { createSlice } from '@reduxjs/toolkit';
import { logInThunk, registerThunk } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogedIn: false,
};
// const handleFulfilled = (state, { payload }) => {
//   state.token = payload.token;
//   state.user = payload.user;
// };

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogedIn = true;
      });
  },
});

export const authReducer = authSlise.reducer;
