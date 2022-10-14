import axios from "axios";
import authHeader from "./header";
const API_URL = "http://localhost:8081/api/test/";

export const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
  };
  