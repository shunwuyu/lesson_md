import { axiosInstance } from "./config";

export const getSellerRequest = () => {
    return axiosInstance.get("/seller");
};