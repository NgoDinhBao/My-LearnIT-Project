import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/post.controller.js';
import { verifyToken } from '../middlewares/auth.js';
const router = express.Router();

router.get('/', verifyToken, getPosts);
router.post('/', verifyToken, createPost);
router.put('/:id', verifyToken, updatePost);
router.delete('/:id', verifyToken, deletePost);

export default router;
