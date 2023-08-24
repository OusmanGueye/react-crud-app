import axios from "axios";

export const productsApi = axios.create({
  baseURL: "http://localhost:9000/",
});

const getProducts = () => {
  return productsApi.get("/products");
};

const getProduct = (id) => {
  return productsApi.get(`/products/${id}`);
};

const createProduct = (product) => {
  return productsApi.post("/products", product);
};

const updateProduct = (id, product) => {
  return productsApi.put(`/products/${id}`, product);
};

const checkProduct = (product) => {
  return productsApi.patch(`/products/`, { checked: !product.checked });
};

const deleteProduct = (id) => {
  return productsApi.delete(`/products/${id}`);
};

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  checkProduct,
};

// Path: src\App\components\Products\Products.js
