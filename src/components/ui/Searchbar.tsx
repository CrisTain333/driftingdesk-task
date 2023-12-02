/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import { useAppDispatch } from "@/redux/hooks/hook";
import {
  changeLoadingState,
  setIsCityNotFound,
  setWeatherData,
} from "@/redux/feature/weather/weatherSlice";
import { getWeather } from "@/service/api";

const SearchBar = () => {
  const [inputValue, setInputValue] =
    React.useState<string>();
  const [isLoading, setIsLoading] =
    React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(changeLoadingState(true));
    if (inputValue === undefined || inputValue === "") {
      alert("Please enter a city name ");
      setIsLoading(false);
      dispatch(changeLoadingState(false));
      return;
    }

    try {
      const data = await getWeather(inputValue);

      if (data?.error) {
        // alert("Please enter a valid city name ");
        setIsLoading(false);
        dispatch(changeLoadingState(false));
        dispatch(setIsCityNotFound(true));
        return;
      }

      setIsLoading(false);
      dispatch(changeLoadingState(false));
      dispatch(setIsCityNotFound(false));
      dispatch(setWeatherData(data));
    } catch (error) {
      setIsLoading(false);
      dispatch(changeLoadingState(false));
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-[50%]  my-10 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between space-x-3"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Your city name"
          />
          <Button
            type="submit"
            disabled={isLoading}
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
