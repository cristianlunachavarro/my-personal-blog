import { createContext } from "react";
import { User } from "../../interfaces/user";

interface ContextProps {
  registerUser: (username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
  cleanError: () => void;
  user: User | {};
  error: string;
}

export const UserContext = createContext({} as ContextProps);
