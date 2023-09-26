import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";

const store = configureStore({
  tasks: taskReducer,
});

export default store;
