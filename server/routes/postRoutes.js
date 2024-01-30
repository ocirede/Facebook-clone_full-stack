import express from "express";
import {
  getAllPosts,
  createPost,
  editPost,
  deletePost,
} from "../controllers/postControllers.js";
import upload from "../middleware/middlewarePostImageLocalStorage.js";

const router = express.Router();

router.get("/fetchposts", getAllPosts);

router.post("/createpost", upload.single("postImage"), createPost);

router.put("/editpost/:postId", editPost);

router.delete("/deletepost/:postId", deletePost);

export default router;
