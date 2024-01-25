import { ReactNode } from "react";

export interface ErrorResponse {
  error: string;
}

export interface ProviderProps {
  children: ReactNode;
}