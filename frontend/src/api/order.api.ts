import API from "./axios";

export const createCheckoutSession = (data: any) =>
  API.post("/orders/checkout", data);

export const getOrders = () =>
  API.get("/orders");

export const getAnalytics = () =>
  API.get("/admin/analytics");