import axios from "axios";

export const baseUrl = "https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue";

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export { axiosInstance };