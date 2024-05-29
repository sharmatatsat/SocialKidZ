import express from "express";
import { getMostLikedAgePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Define your API endpoint
// router.get("/most-liked-user", verifyToken, getMostLikedAgePost);

export default router;
