import { Request, Response } from 'express';
import { Product } from "../models/product.model";
import { asyncHandler } from "../utils/asyncHandler";

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const { page = 1, limit = 10, search, category, sort } = req.query;

  const query: any = {};

  if (search) {
    query.$text = { $search: search };
  }

  if (category) {
    query.category = category;
  }

  const products = await Product.find(query)
    .sort(sort ? { price: sort === "asc" ? 1 : -1 } : {})
    .skip((+page - 1) * +limit)
    .limit(+limit);

  res.json({ success: true, products });
});