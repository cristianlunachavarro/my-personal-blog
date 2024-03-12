import React, { useContext, useEffect, useReducer } from "react";

import { useNavigation } from "@react-navigation/native";

import instance from "../../axiosInstance";

import { ActionTypes } from "../../constants";

import { Article, Blog } from "../../interfaces/blog";

import { BlogContext, BlogReducer, BLOG_INITIAL_STATE } from "./index";

import { ErrorResponse, ProviderProps } from "../../interfaces/axios";

export const BlogProvider: React.FC<ProviderProps> = ({ children }) => {
  const navigation = useNavigation();

  const [state, dispatch] = useReducer(BlogReducer, BLOG_INITIAL_STATE);

  const getBlogs = async (userId: string) => {
    try {
      setIsLoadin(true);
      const { data }: { data: Blog[] | ErrorResponse } = await instance.post(
        `/blog/blogs`,
        {
          userId,
        }
      );
      if ("error" in data) {
        dispatch({
          type: ActionTypes.GET_BLOGS_FAIL,
          payload: data.error,
        });
        setIsLoadin(false);
        return;
      }
      dispatch({ type: ActionTypes.GET_BLOGS_SUCCESS, payload: data });
      setIsLoadin(false);
    } catch (error) {
      setIsLoadin(false);
    }
  };

  const getBlog = async (blogId: string) => {
    try {
      setIsLoadin(true);
      const { data }: { data: Blog | ErrorResponse } = await instance.get(
        `/blog/${blogId}`
      );
      if ("error" in data) {
        dispatch({
          type: ActionTypes.GET_BLOG_FAIL,
          payload: data.error,
        });
        setIsLoadin(false);
        return;
      }
      dispatch({ type: ActionTypes.GET_BLOG_SUCCESS, payload: data });
      setIsLoadin(false);
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_BLOG_FAIL,
        payload: "Invalid User or Password",
      });
      setIsLoadin(false);
    }
  };

  const createBlog = async (
    blogTitle: string,
    article: Article,
    userId: string
  ) => {
    try {
      setIsLoadin(true);
      const { data }: { data: Blog | ErrorResponse } = await instance.post(
        "/blog/create",
        {
          title: blogTitle,
          articles: [article],
          userId,
        }
      );
      if ("error" in data) {
        dispatch({
          type: ActionTypes.CREATE_BLOG_FAIL,
          payload: data.error,
        });
        setIsLoadin(false);
        return;
      }
      dispatch({ type: ActionTypes.CREATE_BLOG_SUCCESS, payload: data });
      setIsLoadin(false);
      navigation.navigate("Blogs" as never);
    } catch (error) {
      dispatch({
        type: ActionTypes.CREATE_BLOG_FAIL,
        payload: "Invalid User or Password",
        
      });
      setIsLoadin(false);
    }
  };

  const editBlog = async (title: string, blogId: string) => {
    try {
      setIsLoadin(true);
      const { data }: { data: Blog | ErrorResponse } = await instance.post(
        "/blog/edit",
        {
          title,
          blogId,
        }
      );
      if ("error" in data) {
        dispatch({
          type: ActionTypes.EDIT_BLOG_FAIL,
          payload: data.error,
        });
        setIsLoadin(false);
        return;
      }
      dispatch({ type: ActionTypes.EDIT_BLOG_SUCCESS, payload: data });
      setIsLoadin(false);
    } catch (error) {
      setIsLoadin(false);
    }
  };

  const deleteBlog = async (blogId: string) => {
    try {
      setIsLoadin(true);
      const { data }: { data: Blog[] | ErrorResponse } = await instance.post(
        "/blog/delete/",
        { blogId }
      );

      if ("error" in data) {
        dispatch({
          type: ActionTypes.DELETE_BLOG_FAIL,
          payload: data.error,
        });
        setIsLoadin(false);
        return;
      }
      dispatch({ type: ActionTypes.DELETE_BLOG_SUCCESS, payload: data });
      setIsLoadin(false);
      navigation.navigate("Blogs" as never);
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_BLOG_FAIL,
        payload: "Error deleting a Blog",
      });
      setIsLoadin(false);
    }
  };

  const createArticle = async (blogId: string, article: Article) => {
    try {
      setIsLoadin(true);
      const { data }: { data: Blog | ErrorResponse } = await instance.post(
        "/blog/create/article",
        {
          blogId,
          article,
        }
      );
      if ("error" in data) {
        dispatch({
          type: ActionTypes.CREATE_ARTICLE_FAIL,
          payload: data.error,
        });
        setIsLoadin(false);
        return;
      }
      dispatch({ type: ActionTypes.CREATE_ARTICLE_SUCCESS, payload: data });
      setIsLoadin(false);
      navigation.navigate("Blog", { blogId });
    } catch (error) {
      dispatch({
        type: ActionTypes.CREATE_ARTICLE_FAIL,
        payload: "Error creating an Article",
      });
      setIsLoadin(false);
    }
  };

  const deleteArticle = async (blogId: string, articleId: string) => {
    try {
      setIsLoadin(true);
      const { data }: { data: Blog | ErrorResponse } = await instance.post(
        "/blog/delete/article/",
        {
          blogId,
          articleId,
        }
      );

      if ("error" in data) {
        dispatch({
          type: ActionTypes.DELETE_ARTICLE_FAIL,
          payload: data.error,
        });
        setIsLoadin(false);
        return;
      }

      dispatch({ type: ActionTypes.DELETE_ARTICLE_SUCCESS, payload: data });
      setIsLoadin(false);
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_ARTICLE_FAIL,
        payload: "Error deleting an Article",
      });
      setIsLoadin(false);
    }
  };

  const editArticle = async (article: Article, blogId: string) => {
    try {
      setIsLoadin(true);
      const { data }: { data: Blog | ErrorResponse } = await instance.put(
        "/blog/edit/article/",
        { article, blogId }
      );

      if ("error" in data) {
        dispatch({
          type: ActionTypes.EDIT_ARTICLE_FAIL,
          payload: data.error,
        });
        setIsLoadin(false);
        return;
      }
      dispatch({ type: ActionTypes.EDIT_ARTICLE_SUCCESS, payload: data });
      setIsLoadin(false);
    } catch (error) {
      dispatch({
        type: ActionTypes.EDIT_ARTICLE_FAIL,
        payload: "Error editin an Article",
      });
      setIsLoadin(false);
    }
  };

  const setBlogError = (error: string) => {
    dispatch({ type: ActionTypes.SET_BLOG_ERROR, payload: error });
  };

  const cleanBlogs = () => {
    dispatch({ type: ActionTypes.CLEAN_BLOGS, payload: [] });
  };

  const cleanBlog = () => {
    dispatch({ type: ActionTypes.CLEAN_BLOG, payload: {} });
  };

  const setInitialBlogs = (blogs: Blog[]) => {
    dispatch({ type: ActionTypes.CREATE_BLOG_SUCCESS, payload: blogs });
  };

  const setIsLoadin = (isLoading: boolean) => {
    dispatch({ type: ActionTypes.SET_IS_LOADING, payload: isLoading });
  };
  return (
    <BlogContext.Provider
      value={{
        ...state,
        getBlog,
        createBlog,
        deleteBlog,
        editBlog,
        getBlogs,
        setInitialBlogs,
        cleanBlogs,
        cleanBlog,
        createArticle,
        deleteArticle,
        editArticle,
        setBlogError
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
