import React, { ReactNode, useReducer } from "react";
import { useNavigation } from "@react-navigation/native";

import instance from "../../axiosInstance";

import { ActionTypes } from "../../constants";

import { User } from "../../interfaces/user";

// import { ErrorResponse, ProviderProps } from "../../interfaces/axios";

import { UserContext, USER_INITIAL_STATE, UserReducer } from "./";

export interface ErrorResponse {
  error: string;
}

export interface ProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, USER_INITIAL_STATE);

  const navigation = useNavigation();

  const registerUser = async (username: string, password: string) => {
    try {
      const { data }: { data: User | ErrorResponse } = await instance.post(
        "/user/register",
        {
          username,
          password,
        }
      );
      if ("error" in data) {
        dispatch({
          type: ActionTypes.REGISTER_FAIL,
          payload: data.error,
        });
        return;
      }
      dispatch({ type: ActionTypes.REGISTER_SUCCESS, payload: data });
      navigation.navigate("Blog" as never);
    } catch (error) {
      dispatch({
        type: ActionTypes.REGISTER_FAIL,
        payload: "Invalid User or Password",
      });
    }
  };

  const loginUser = async (username: string, password: string) => {
    try {
      const { data }: { data: User | ErrorResponse } = await instance.post(
        "/user/login",
        {
          username,
          password,
        }
      );
      if ("error" in data) {
        dispatch({ type: ActionTypes.LOGIN_FAIL, payload: data.error });
        return;
      }
      dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: data });
      navigation.navigate("Blog" as never);
    } catch (error) {
      dispatch({ type: ActionTypes.LOGIN_FAIL, payload: "Could not login" });
    }
  };

  const logoutUser = async () => {
    const { data }: { data: {} } = await instance.post("/user/logout");
    if (data) {
      dispatch({ type: ActionTypes.LOGOUT_SUCCESS, payload: {} });
      navigation.navigate("Login" as never);
    }
  };

  const cleanError = () => {
    dispatch({ type: ActionTypes.CLEAN_ERROR });
  };

  return (
    <UserContext.Provider
      value={{ ...state, registerUser, loginUser, logoutUser, cleanError }}
    >
      {children}
    </UserContext.Provider>
  );
};
