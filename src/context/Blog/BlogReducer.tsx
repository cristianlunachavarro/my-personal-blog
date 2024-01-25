// import { Blog } from "../../interfaces/blog";
// import { ActionTypes } from "../../constants";

// interface BlogState {
//   blog: Blog;
// }

// export const BLOG_INICIAL_STATE: BlogState = {
//   blog: {
//     _id: "",
//     title: "",
//     articles: [],
//   },
// };

// type BlogActionTypes =
//   | { type: ActionTypes.CREATE_BLOG_SUCCESS; payload: Blog }
//   | { type: ActionTypes.CREATE_BLOG_FAIL; payload: string };

// export const BlogReducer = (
//   state = BLOG_INICIAL_STATE,
//   action: BlogActionTypes
// ) => {
//   switch (action.type) {
//     case ActionTypes.CREATE_BLOG_SUCCESS:
//       return {
//         ...state,
//         blog: action.payload,
//       };
//     default:
//       return state;
//   }
// };
