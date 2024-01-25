import express from "express";
import { createArticle, createBlog } from "../../controllers/blog";

const router = express.Router();

router.post("/create", createBlog);
router.post("/create/article", createArticle);

export default router;
