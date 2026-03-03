import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET_KEY } from "../environment/environment";

export const protect = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized" });

  const decoded = jwt.verify(token, JWT_SECRET_KEY);
  req.user = decoded;
  next();
};

export const adminOnly = (req: any, res: Response, next: NextFunction) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });
  next();
};