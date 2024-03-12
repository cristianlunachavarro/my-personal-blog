import express from "express";
import {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  editBlog,
  createArticle,
  deleteArticle,
  editArticle,
} from "../../controllers/blog";

const router = express.Router();

router.get("/:blogId", getBlog);
router.post("/blogs", getBlogs);
router.post("/create", createBlog);
router.post("/delete", deleteBlog);
router.post("/edit", editBlog);
router.post("/create/article", createArticle);
router.post("/delete/article", deleteArticle);
router.put("/edit/article", editArticle);

export default router;
