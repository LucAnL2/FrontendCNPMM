import axios from "axios";

// Tạo instance với baseURL từ biến môi trường
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Gắn token vào header nếu có
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Trả về dữ liệu khi thành công
    if (response && response.data) return response.data;
    return response;
  },
  function (error) {
    // Xử lý lỗi trả về từ server
    if (error?.response?.data) return error.response.data;
    return Promise.reject(error);
  }
);

export default instance;
