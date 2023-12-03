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
import { useToast } from "./use-toast";
import { ToastAction } from "./toast";

const SearchBar = () => {
  const [inputValue, setInputValue] =
    React.useState<string>();
  const [isLoading, setIsLoading] =
    React.useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(changeLoadingState(true));
    if (inputValue === undefined || inputValue === "") {
      toast({
        duration: 2000,
        variant: "destructive",
        title: "Please enter city Name",
        description:
          "There was a problem with your request.",
      });
      setIsLoading(false);
      dispatch(changeLoadingState(false));
      return;
    }

    try {
      const data = await getWeather(inputValue);

      if (data?.error) {
        toast({
          duration: 2000,
          variant: "destructive",
          title:
            data?.error?.response?.data?.error?.message,
          description: "Please Enter a Valid City",
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => {
                setInputValue("");
              }}
            >
              Try again
            </ToastAction>
          ),
        });
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
      toast({
        duration: 2000,
        variant: "destructive",
        title: "Internal Error",
        description:
          "There was a problem with server , we are working on it. Please try again later",
        action: (
          <ToastAction altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    }
  };

  return (
    <div>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between space-x-2 md:space-x-3"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="enter city name"
            className="w-[35vw]  md:w-[30vw]"
          />
          <Button
            type="submit"
            disabled={isLoading}
            variant={"default"}
            size={"sm"}
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
