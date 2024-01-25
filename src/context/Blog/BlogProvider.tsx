// import React, { ReactNode, useContext, useReducer } from "react";
// // import { ProviderProps, ErrorResponse } from "../../interfaces/axios";
// import instance from "../../axiosInstance";

// import { ActionTypes } from "../../constants";

// import { Article, Blog } from "../../interfaces/blog";

// import { UserContext } from "../user";

// import { BlogContext, BlogReducer, BLOG_INICIAL_STATE } from "./";

// export interface ErrorResponse {
//   error: string;
// }

// export interface ProviderProps {
//   children: ReactNode;
// }

// export const BlogProvider: React.FC<ProviderProps> = ({ children }) => {
//   const [state, dispatch] = useReducer(BlogReducer, BLOG_INICIAL_STATE);

//   const { user } = useContext(UserContext);

//   const createBlog = async (blogTitle: string, article: Article) => {
//     try {
//       console.log("Llega aca =====>");
//       const { data }: { data: Blog | ErrorResponse } = await instance.post(
//         "/blog/create",
//         {
//           title: blogTitle,
//           article,
//           userId: "12e12e12er1212e21",
//         }
//       );
//       if ("error" in data) {
//         dispatch({
//           type: ActionTypes.CREATE_BLOG_FAIL,
//           payload: data.error,
//         });
//         return;
//       }
//       dispatch({ type: ActionTypes.CREATE_BLOG_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.CREATE_BLOG_FAIL,
//         payload: "Invalid User or Password",
//       });
//     }
//   };

//   return (
//     <BlogContext.Provider value={{ ...state, createBlog }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
