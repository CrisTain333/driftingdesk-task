import axiosInstance from "@/lib/axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getWeather = async (queryData: string) => {
  try {
    const API_KEY = process.env.API_KEY;
    const response = await axiosInstance.get(
      `/forecast.json?key=${API_KEY}&q=${queryData}&days=7&aqi=yes&alerts=yes`
    );
    return response?.data;
  } catch (error: any) {
    console.error(error);
    return { error };
  }
};
