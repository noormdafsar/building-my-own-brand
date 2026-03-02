import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, index: true },
    description: String,
    price: { type: Number, index: true },
    category: { type: String, index: true },
    stock: Number,
    image: String,
  },
  { timestamps: true }
);

productSchema.index({ title: "text" });

export const Product = mongoose.model("Product", productSchema);