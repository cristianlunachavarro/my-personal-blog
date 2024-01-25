import { User } from "../../interfaces/user";
import { ActionTypes } from "../../constants";

interface UserState {
  error: string;
  user: User | {};
}

export const USER_INITIAL_STATE: UserState = {
  error: "",
  user: {
    _id: "",
    username: "",
  },
};

type UserActionTypes =
  | { type: ActionTypes.REGISTER_SUCCESS; payload: User }
  | { type: ActionTypes.REGISTER_FAIL; payload: string }
  | { type: ActionTypes.LOGIN_SUCCESS; payload: User }
  | { type: ActionTypes.LOGOUT_SUCCESS; payload: {} }
  | { type: ActionTypes.LOGIN_FAIL; payload: string }
  | { type: ActionTypes.CLEAN_ERROR };

export const UserReducer = (
  state = USER_INITIAL_STATE,
  action: UserActionTypes
) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.CLEAN_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};
