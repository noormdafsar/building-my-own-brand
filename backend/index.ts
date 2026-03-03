import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import adminRouter from './routers/adminRouter';
import { PORT, MONGO_URI } from './environment/environment';
import { connectDB } from './db_config/db';

dotenv.config();

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // CORS configuration
app.use(express.json());

// Routes
app.use('/api/v1/admin', adminRouter);

const startServer = async () => {
  await connectDB(MONGO_URI);
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
};

startServer();
