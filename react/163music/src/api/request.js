import { axiosInstance } from "./config";
export const getBannerRequest = () => {
  return axiosInstance.get ('/banner');
}