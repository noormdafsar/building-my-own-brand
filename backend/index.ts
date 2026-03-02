import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import adminRouter from './routers/adminRouter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // CORS configuration
app.use(express.json());

// Routes
app.use('/api/v1/admin', adminRouter);

async function main() {
    try {
        const dbUri = process.env.MONGO_URI;
        if (!dbUri) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        await mongoose.connect(dbUri);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main();
