import express from 'express';
import { createUser, getUser,loginUser } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/', getUser);
router.post('/register', createUser);
router.post('/login', loginUser);

export default router;
