import mongoose from "mongoose";

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.USER,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);