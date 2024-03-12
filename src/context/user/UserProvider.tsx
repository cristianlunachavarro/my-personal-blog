import React, { useContext, useReducer } from "react";

import { useNavigation } from "@react-navigation/native";

import { ActionTypes } from "../../constants";

import { User } from "../../interfaces/user";

import { ErrorResponse, ProviderProps } from "../../interfaces/axios";

import { Blog } from "../../interfaces/blog";

import instance from "../../axiosInstance";

import {
  UserContext,
  USER_INITIAL_STATE,
  UserReducer,
  UserState,
  UserActionTypes,
} from "./";

import {
  BlogReducer,
  BLOG_INITIAL_STATE,
  BlogState,
  BlogActionTypes,
  BlogContext,
} from "../blog";

interface RootAction {
  type: string;
  payload?: any;
}

export interface RootState {
  user: UserState;
  blogs: BlogState;
}

export const rootReducer = (
  state: RootState = { user: USER_INITIAL_STATE, blogs: BLOG_INITIAL_STATE },
  action: RootAction
) => ({
  user: UserReducer(state.user, action as UserActionTypes),
  blogs: BlogReducer(state.blogs, action as BlogActionTypes),
});

export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
  const navigation = useNavigation();

  const [state, dispatch] = useReducer(rootReducer, {
    user: USER_INITIAL_STATE,
    blogs: BLOG_INITIAL_STATE,
  });

  const { setInitialBlogs, cleanBlogs } = useContext(BlogContext);

  const handleDispatch = (action: { type: string; payload?: any }) => {
    dispatch(action);
  };

  const registerUser = async (
    name: string,
    lastName: string,
    username: string,
    password: string
  ) => {
    try {
      const { data }: { data: User | ErrorResponse } = await instance.post(
        "/user/register",
        { name, lastName, username, password }
      );

      if ("error" in data) {
        handleDispatch({
          type: ActionTypes.REGISTER_FAIL,
          payload: data.error,
        });
        return;
      }

      handleDispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: data,
      });

      navigation.navigate("Blogs" as never);
    } catch (error) {
      handleDispatch({
        type: ActionTypes.REGISTER_FAIL,
        payload: "Invalid User or Password",
      });
    }
  };

  const loginUser = async (username: string, password: string) => {
    try {
      const { data }: { data: { user: User; blogs: Blog[] } | ErrorResponse } =
        await instance.post("/user/login", { username, password });

      const { user, blogs } = data as { user: User; blogs: Blog[] };

      if ("error" in data) {
        handleDispatch({ type: ActionTypes.LOGIN_FAIL, payload: data.error });
        return;
      }

      cleanBlogs();
      handleDispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: user });
      // setInitialBlogs(blogs);

      navigation.navigate("Blogs" as never);
    } catch (error) {
      handleDispatch({
        type: ActionTypes.LOGIN_FAIL,
        payload: "Could not login",
      });
    }
  };

  const logoutUser = async () => {
    const { data }: { data: {} } = await instance.post("/user/logout");

    if (data) {
      cleanBlogs();
      handleDispatch({ type: ActionTypes.LOGOUT_SUCCESS, payload: {} });
      navigation.navigate("Login" as never);
    }
  };

  const cleanError = () => {
    handleDispatch({ type: ActionTypes.CLEAN_ERROR });
  };

  return (
    <UserContext.Provider
      value={{ ...state.user, registerUser, loginUser, logoutUser, cleanError }}
    >
      {children}
    </UserContext.Provider>
  );
};
