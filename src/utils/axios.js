import axios from "axios";
export const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = process.env.REACT_APP_API_Rails_DOMEIN;