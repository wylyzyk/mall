import axios from "axios";

export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    // baseURL: "http://adi-v3.dev"
    baseURL: "http://152.136.185.210:8000/api/w6",
    // baseURL: "http://152.136.185.210:7878/api/m5/",
    // baseURL: "http://123.207.32.32:8000",
    timeout: 3000
  });

  // 2. axios拦截器
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      return err;
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      return err;
    }
  );

  // 3. 发送网络请求
  return instance(config);
}
