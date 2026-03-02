import { Request, Response } from "express";
import { stripe } from "../db_config/stripe";
import { Product } from "../models/product.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

export const createCheckoutSession = asyncHandler(async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product || (product.stock || 0) < quantity) {
    throw new ApiError(400, "Product unavailable");
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: product.title || "Product" },
          unit_amount: (product.price || 0) * 100,
        },
        quantity,
      },
    ],
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
  });

  res.json({ url: session.url });
});