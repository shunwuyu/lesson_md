import { axiosInstance } from "./config";


export const loginByPhoneRequest = (phone, password) => {
  return axiosInstance.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  );
};