import { Blog } from "../../interfaces/blog";
import { ActionTypes } from "../../constants";

export interface BlogState {
  error: string;
  isLoading: boolean;
  blogs: Blog[];
  blog: Blog;
}

export const BLOG_INITIAL_STATE: BlogState = {
  error: "",
  isLoading: false,
  blogs: [],
  blog: {
    _id: "",
    title: "",
    articles: [],
  },
};

export type BlogActionTypes =
  | { type: ActionTypes.CREATE_BLOG_SUCCESS; payload: Blog[] | Blog }
  | { type: ActionTypes.CREATE_BLOG_FAIL; payload: string }
  | { type: ActionTypes.GET_BLOGS_SUCCESS; payload: Blog[] }
  | { type: ActionTypes.GET_BLOGS_FAIL; payload: string }
  | { type: ActionTypes.CLEAN_BLOGS; payload: Blog[] }
  | { type: ActionTypes.CLEAN_BLOG; payload: {} }
  | { type: ActionTypes.GET_BLOG_SUCCESS; payload: Blog }
  | { type: ActionTypes.GET_BLOG_FAIL; payload: string }
  | { type: ActionTypes.CREATE_ARTICLE_SUCCESS; payload: Blog }
  | { type: ActionTypes.CREATE_ARTICLE_FAIL; payload: string }
  | { type: ActionTypes.DELETE_BLOG_SUCCESS; payload: Blog[] | [] }
  | { type: ActionTypes.DELETE_BLOG_FAIL; payload: string }
  | { type: ActionTypes.EDIT_BLOG_FAIL; payload: string }
  | { type: ActionTypes.EDIT_BLOG_SUCCESS; payload: Blog }
  | { type: ActionTypes.DELETE_ARTICLE_SUCCESS; payload: Blog }
  | { type: ActionTypes.DELETE_ARTICLE_FAIL; payload: string }
  | { type: ActionTypes.EDIT_ARTICLE_SUCCESS; payload: Blog }
  | { type: ActionTypes.EDIT_ARTICLE_FAIL; payload: string }
  | { type: ActionTypes.SET_BLOG_ERROR; payload: string }
  | { type: ActionTypes.SET_IS_LOADING; payload: boolean };


export const BlogReducer = (
  state = BLOG_INITIAL_STATE,
  action: BlogActionTypes
) => {
  switch (action.type) {
    case ActionTypes.GET_BLOG_SUCCESS:
      return {
        ...state,
        blog: Array.isArray(action.payload)
          ? action.payload[0]
          : action.payload,
      };
    case ActionTypes.GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload,
      };
    case ActionTypes.CREATE_BLOG_SUCCESS:
      return {
        ...state,
        blogs: [
          ...state.blogs,
          ...(Array.isArray(action.payload)
            ? action.payload
            : [action.payload]),
        ],
      };

    case ActionTypes.DELETE_BLOG_SUCCESS:
      return {
        ...state,
        blogs: action.payload,
        blog: {},
      };
    case ActionTypes.EDIT_BLOG_SUCCESS:
      return {
        ...state,
        blog: action.payload,
      };
    case ActionTypes.SET_BLOG_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case ActionTypes.CLEAN_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case ActionTypes.CLEAN_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case ActionTypes.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        blog: action.payload,
      };
    case ActionTypes.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        blog: action.payload,
      };
    case ActionTypes.EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        blog: action.payload,
      };
    case ActionTypes.EDIT_ARTICLE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
};
