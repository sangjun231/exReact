import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

api.interceptors.request.use((config) => {
  console.log("intercept");

  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("response");

    return response;
  },
  (error) => {
    console.log("error");

    return Promise.reject(error);
  }
);

export default api;
