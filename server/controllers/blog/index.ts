import { Request, Response, NextFunction } from "express";
import { UserModel } from "../../models/user/index";
import { BlogModel } from "../../models/blog/index";

export const createBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, title, article = {} } = req.body;
    const {
      title: articleTitle,
      text: articleText,
      images: articleImages,
    } = article;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    const newArticle = {
      title: articleTitle || "Default Article Title",
      text: articleText || "Default Article Text",
      images: articleImages || ["https://i.imgur.com/2m55754.jpg"],
    };

    const newBlog = new BlogModel({
      title: title || "Default Blog Title",
      articles: [newArticle],
      userId: user._id,
    });

    const savedBlog = await newBlog.save();

    if (Array.isArray(user.blog)) {
      user.blog.push(savedBlog);
    } else {
      user.blog = [savedBlog];
    }

    return res.status(201).json(savedBlog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { blogId, article } = req.body;
    const blog = await BlogModel.findById(blogId);

    if (!blog) {
      return res.status(400).json({
        error: "Blog not found",
      });
    }

    const { title, text, images } = article;

    const newArticle = {
      title: title || "Default Article Title",
      text: text || "Default Article Text",
      images: images || ["https://i.imgur.com/2m55754.jpg"],
    };

    blog.articles.push(newArticle);
    const savedBlog = await blog.save();

    return res.status(201).json(savedBlog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
