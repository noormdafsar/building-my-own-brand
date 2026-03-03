import { Request, Response } from "express";
import Order from "../models/order.model";
import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "../environment/environment";

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2026-02-25.clover"
});

export const createCheckoutSession = async (
  req: any,
  res: Response
) => {
  const { cart } = req.body;

  const line_items = cart.map((item: any) => ({
    price_data: {
      currency: "inr",
      product_data: { name: item.name },
      unit_amount: item.price * 100
    },
    quantity: item.quantity
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel"
  });

  await Order.create({
    user: req.user.id,
    items: cart,
    totalAmount: cart.reduce(
      (acc: number, item: any) =>
        acc + item.price * item.quantity,
      0
    )
  });

  res.json({ id: session.id });
};