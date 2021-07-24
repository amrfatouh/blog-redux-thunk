import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  posts: postsReducer,
  users: userReducer,
});

export default reducers;
