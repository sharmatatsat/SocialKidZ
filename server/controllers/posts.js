import mongoose from "mongoose";
import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getMostLikedAgePost = async (req, res) => {
  try {
    const topLikedPosts = await Post.find().sort({ 'likes.size': -1 }).limit(3).populate('userId');

    // Assuming topLikedPosts is an array of objects with a likes property containing a size field
      const sortedTopLikedPosts = topLikedPosts.sort((a, b) => b.likes.size - a.likes.size);



    // Extract relevant information for each post
    const topPostsData = sortedTopLikedPosts.map(post => ({
      firstName: post.userId.firstName,
      lastName: post.userId.lastName,
      location: post.location,
      description: post.description,
      picturePath: post.picturePath,
      userPicturePath: post.userPicturePath,
      likes: post.likes.size, // Update this line to get the size of the likes Map
      comments: post.comments,
    }));
    

    res.status(200).json(topPostsData);
  } catch (error) {
    console.error("Error finding top liked posts:", error);
    res.status(500).json({ error: "Server error" });
  }
};
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
