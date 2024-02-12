import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlicer";

export default configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
