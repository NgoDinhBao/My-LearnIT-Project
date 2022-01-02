import express from 'express';
import { createUser, getUser, loginUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', verifyToken, getUser);
router.post('/register', createUser);
router.post('/login', loginUser);

export default router;
