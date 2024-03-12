import { Request, Response, NextFunction } from "express";
import { UserModel } from "../../models/user/index";
import { BlogModel } from "../../models/blog/index";

export const getBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;
    const blog = await BlogModel.find({
      _id: blogId,
    }).exec();

    if (!blog) {
      res.status(200).json({
        error: "Blog not found",
      });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    const blogs = await BlogModel.find({ userId: userId });

    if (!blogs) {
      res.status(200).json({ error: "Blogs no found" });
    }
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, title, articles = [] } = req.body;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(200).json({
        error: "User not found",
      });
    }

    const newArticles = articles.map((article: any) => {
      return {
        title: article.title || "Default Article Title",
        text: article.text || "Default Article Text",
        images: article.images || ["https://i.imgur.com/2m55754.jpg"],
      };
    });

    const newBlog = new BlogModel({
      title: title || "Default Blog Title",
      articles: newArticles,
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

export const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { blogId } = req.body;

    const deletedBlog = await BlogModel.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const blogs = await BlogModel.find({ userId: deletedBlog.userId });

    return res.json(blogs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const editBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, blogId } = req.body;

    const blog = await BlogModel.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    blog.title = title;

    await blog.save();

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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

export const deleteArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { blogId, articleId } = req.body;

    let blog = await BlogModel.findById(blogId);
    if (!blog) {
      return res.status(400).json({
        error: "Blog not found",
      });
    }

    const articles = blog.articles.filter(
      (art) => art._id?.toString() !== articleId
    );

    blog.set("articles", articles);

    const updatedBlog = await blog.save();

    return res.status(201).json(updatedBlog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const editArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { article, blogId } = req.body;

    let blog = await BlogModel.findById(blogId);

    if (!blog) {
      return res.status(400).json({
        error: "Blog not found",
      });
    }

    const articleIndex = blog.articles.findIndex(
      (art) => art._id?.toString() === article._id
    );

    if (articleIndex === -1) {
      return res.status(400).json({
        error: "Article not found",
      });
    }

    blog.articles[articleIndex] = article;

    const updatedBlog = await blog.save();
    return res.status(201).json(updatedBlog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
