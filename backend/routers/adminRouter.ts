import express from 'express';
import { signup, login } from '../controllers/adminController';
// import adminMiddleware from '../middlewares/admin.middleware';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;