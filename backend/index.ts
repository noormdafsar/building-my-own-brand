import express from 'express';
import mongoose from 'mongoose';
import dns from 'dns';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import authRoutes from './routers/auth.routes';
import { PORT, MONGO_URI } from './environment/environment';
import { connectDB } from './db_config/db';
import productRoutes from "./routers/product.routes";

// Force Node.js to use a public DNS server to resolve SRV record issues
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // CORS configuration
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const startServer = async () => {
  await connectDB(MONGO_URI);
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
};

startServer();
