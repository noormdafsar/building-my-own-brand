import { api } from "./axios";

export const createCheckoutSession = (data: any) =>
  api.post("/orders/checkout", data);

export const getOrders = () =>
  api.get("/orders");

export const getAnalytics = () =>
  api.get("/admin/analytics");