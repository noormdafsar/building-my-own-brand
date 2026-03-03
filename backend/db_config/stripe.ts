import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "../environment/environment";

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2026-02-25.clover",
});