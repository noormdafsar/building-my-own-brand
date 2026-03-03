import express from "express";
import { protect } from "../middlewares/auth.middleware";
import { createCheckoutSession } from "../controllers/order.controller";

const router = express.Router();

router.post("/checkout", protect, createCheckoutSession);

export default router;