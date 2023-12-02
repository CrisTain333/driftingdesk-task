import axiosInstance from "@/lib/axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getWeather = async (queryData: string) => {
  try {
    const APPID = process.env.APPID;
    const response = await axiosInstance.get(
      `/weather?q=${queryData}&APPID=${APPID}`
    );
    return response?.data;
  } catch (error: any) {
    console.error(error);
    return { error };
  }
};

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7a521b1ff6285fe7eabed9cc90b77148
