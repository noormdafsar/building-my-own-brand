import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { stripe } from "../db_config/stripe";
import { WEBHOOK_SECRET } from "../environment/environment";

export const stripeWebhook = asyncHandler(async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"]!;
  const event = stripe.webhooks.constructEvent(
    req.body,
    sig,
    WEBHOOK_SECRET
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Deduct stock
    // Create order
    // Calculate revenue
  }

  res.json({ received: true });
});