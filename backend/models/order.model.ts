import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    items: [
      {
        name: String,
        price: Number,
        quantity: Number,
        productId: String
      }
    ],
    totalAmount: Number,
    paymentStatus: {
      type: String,
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);