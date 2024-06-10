import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "react",
  },
  {
    id: 2,
    title: "redux",
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
