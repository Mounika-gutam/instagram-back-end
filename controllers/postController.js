import Post from '../models/Post.js';
import cloudinary from '../config/cloudinary.js';

export const createPost = async (req, res) => {
  const { caption } = req.body;
  const userId = req.user.id;

  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newPost = new Post({
      user: userId,
      imageUrl: result.secure_url,
      caption,
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username profilePicture');
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
