import express from 'express';
import { createPost, getPosts } from '../controllers/postController.js';
import auth from '../middleware/auth.js';
import multer from 'multer';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({});
const upload = multer({ storage });

// Create a new post
router.post('/', auth, upload.single('image'), createPost);

// Get all posts
router.get('/', getPosts);

export default router;
