import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState, // === initialState: initialState
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload]; // === state.push(action.payload) [sin return] <- forma incorrecta
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) state.splice(state.indexOf(taskFound), 1);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
