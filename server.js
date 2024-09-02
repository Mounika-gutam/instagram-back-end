import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route handling
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
