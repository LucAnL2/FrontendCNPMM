import instance from "./axios.customize";

const createUserApi = async (name, email, password) => {
  const URL_API = "/v1/api/register";

  const data = {
    name,
    email,
    password,
  };
  return instance.post(URL_API, data);
};

const loginApi = async (email, password) => {
  const URL_API = "/v1/api/login";

  const data = {
    email,
    password,
  };
  return instance.post(URL_API, data);
};

const getUserApi = async () => {
  const URL_API = "/v1/api/users";
  return instance.get(URL_API);
};

const getAllCateApi = async () => {
  const URL_API = "/v1/api/category";
  return instance.get(URL_API);
};

// lấy sản phẩm theo category
const getProductsByCateApi = (
  cateId,
  page = 1,
  limit = 2,
  search = "",
  minPrice,
  maxPrice
) => {
  let URL_API = `/v1/api/product/${cateId}?page=${page}&limit=${limit}`;
  if (search) URL_API += `&search=${encodeURIComponent(search)}`;
  if (minPrice !== undefined) URL_API += `&minPrice=${minPrice}`;
  if (maxPrice !== undefined) URL_API += `&maxPrice=${maxPrice}`;
  return instance.get(URL_API);
};

// lấy tất cả sản phẩm
const getAllProducts = (
  page = 1,
  limit = 2,
  search = "",
  minPrice,
  maxPrice
) => {
  let URL_API = `/v1/api/product?page=${page}&limit=${limit}`;
  if (search) URL_API += `&search=${encodeURIComponent(search)}`;
  if (minPrice !== undefined) URL_API += `&minPrice=${minPrice}`;
  if (maxPrice !== undefined) URL_API += `&maxPrice=${maxPrice}`;
  return instance.get(URL_API);
};

export {
  createUserApi,
  loginApi,
  getUserApi,
  getAllCateApi,
  getProductsByCateApi,
  getAllProducts,
};
