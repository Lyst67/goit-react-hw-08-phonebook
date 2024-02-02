import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';
import { initialState } from './initialState';

export const carsSlice = createSlice({
  name: 'carsList',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const carsReducer = carsSlice.reducer;
