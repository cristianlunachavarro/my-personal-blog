import { createContext } from "react";
import { Article, Blog } from "../../interfaces/blog";

interface ContextProps {
  setInitialBlogs: (blogs: Blog[]) => void;
  getBlogs: (userId: string) => void;
  getBlog: (blogId: string) => void;
  createBlog: (blogTitle: string, article: Article, userId: string) => void;
  deleteBlog: (blogId: string) => void;
  editBlog: (title: string, blogId: string) => void;
  createArticle: (blogId: string, article: Article) => void;
  deleteArticle: (blogId: string, articleId: string) => void;
  editArticle: (article: Article, blogId: string) => void;
  cleanBlogs: () => void;
  cleanBlog: () => void;
  setBlogError: (error: string) => void;
  isLoading: boolean;
  error: string;
  blogs: Blog[];
  blog: Blog;
}
export const BlogContext = createContext({} as ContextProps);
