import { createContext } from "react";
import { User } from "../../interfaces/user";
import { Blog } from "../../interfaces/blog";

interface ContextProps {
  registerUser: (
    name: string,
    lastName: string,
    username: string,
    password: string
  ) => void;
  loginUser: (name: string, lastName: string) => void;
  logoutUser: () => void;
  cleanError: () => void;
  user: User | {};
  error: string;
}

export const UserContext = createContext({} as ContextProps);
