/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

export interface WeatherState {
  data: any | null;
  isDataLoading: boolean;
  isCityNotFound: boolean;
}

const initialState: WeatherState = {
  data: null,
  isDataLoading: false,
  isCityNotFound: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    changeLoadingState: (
      state,
      action: PayloadAction<boolean>
    ) => {
      console.log(action);
      state.isDataLoading = action.payload;
    },
    setIsCityNotFound: (
      state,
      action: PayloadAction<boolean>
    ) => {
      console.log(action);
      state.isCityNotFound = action.payload;
    },
  },
});

export const {
  changeLoadingState,
  setIsCityNotFound,
  setWeatherData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
