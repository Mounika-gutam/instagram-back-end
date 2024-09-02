import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user profile
router.get('/me', auth, getUserProfile);

export default router;
