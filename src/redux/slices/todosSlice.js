import { createSlice } from "@reduxjs/toolkit";
// import { delTodo } from "../modules/todos";

const initialState = [
  {
    id: 1,
    title: "learn react",
  },
  {
    id: 2,
    title: "learn redux",
  },
];
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    delTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, delTodo } = todosSlice.actions;
export default todosSlice.reducer;
