import express from "express";
import {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller";
import { protect, adminOnly } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getSingleProduct);

router.post("/", protect, adminOnly, createProduct);
router.put("/:id", protect, adminOnly, updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;