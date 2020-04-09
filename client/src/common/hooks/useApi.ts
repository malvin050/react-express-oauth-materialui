import axios from "axios";

const handleErrors = (err: Error) => {
  throw err;
};

export const useApi = () => {
  const axiosInstance = axios.create({
    baseURL: "/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const executeApiCall = (apiOptions: object) => {
    return axiosInstance(apiOptions)
      .then((response) => response.data)
      .catch(handleErrors);
  };

  return { executeApiCall };
};
