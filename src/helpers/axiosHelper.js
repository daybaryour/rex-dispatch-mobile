import axios from "axios";
import constants from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

//apply base url for axios
const API_URL = constants.API_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

const getToken = async () => {
  const token = await AsyncStorage.getItem("token");

  console.log(token, "15");
  axiosApi.defaults.headers.common["Authorization"] = "Bearer " + token;
};

getToken();

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config });
}

export async function post(url, data, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config });
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config });
}

export async function patch(url, data, config = {}) {
  return axiosApi.patch(url, { ...data }, { ...config });
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config });
}
