import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export interface AuthRequest extends Request {
    admin?: string | jwt.JwtPayload;
}

const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ success: false, message: 'Access Denied. No token provided.' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret-key');
        req.admin = decoded;
        next();
    }
    catch (err) {
        res.status(400).json({ success: false, message: 'Invalid Token' });
    }
}

export default adminMiddleware;