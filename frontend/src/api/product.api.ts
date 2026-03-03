import API from "./axios";

export const getProducts = (params?: any) =>
  API.get("/products", { params });

export const getProduct = (id: string) =>
  API.get(`/products/${id}`);

export const deleteProduct = (id: string) => 
  API.delete(`/delete/${id}`);