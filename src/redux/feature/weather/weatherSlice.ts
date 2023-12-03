/* eslint-disable @typescript-eslint/no-explicit-any */
import { TemperatureUnitEnums } from "@/enums/TemperatureUnit";
import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

export interface WeatherState {
  data: any | null;
  isCityNotFound: boolean;
  isDataLoading: boolean;
  temperatureUnit: string;
}

const initialState: WeatherState = {
  data: null,
  isCityNotFound: false,
  isDataLoading: false,
  temperatureUnit: TemperatureUnitEnums.Celsius,
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
      state.isDataLoading = action.payload;
    },
    setIsCityNotFound: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isCityNotFound = action.payload;
    },
    changeTemperatureUnit: (
      state,
      action: PayloadAction<
        | TemperatureUnitEnums.Celsius
        | TemperatureUnitEnums.Fahrenheit
      >
    ) => {
      state.temperatureUnit = action.payload;
    },
  },
});

export const {
  changeLoadingState,
  setIsCityNotFound,
  setWeatherData,
  changeTemperatureUnit,
} = weatherSlice.actions;

export default weatherSlice.reducer;
