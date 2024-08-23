const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  };
};

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

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;
