import axios from "axios";

const URL = process.env.BASE_URL;

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
