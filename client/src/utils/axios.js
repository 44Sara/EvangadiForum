import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8888/api"  
});

export default axiosInstance;
