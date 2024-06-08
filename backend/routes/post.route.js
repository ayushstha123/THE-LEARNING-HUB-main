import express from 'express'
import { verifyToken } from '../utils/verifyToken.js'
import { create,getPosts } from '../controllers/post.controller.js';

const router = express.Router();
router.post('/create', create);
router.get("/get", getPosts);
export default router;