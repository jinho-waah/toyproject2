import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delTodo } from "../redux/slices/todosSlice";
// import { delTodo } from "../redux/modules/todos";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  // State to track which todos are checked
  const [checkedTodos, setCheckedTodos] = useState({});

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    setCheckedTodos((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the checked status
    }));
  };

  return (
    <div>
      {todos.map((todo) => {
        const isChecked = checkedTodos[todo.id];

        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={isChecked || false} // Fallback to false if undefined
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <span
              style={{ textDecoration: isChecked ? "line-through" : "none" }}
            >
              {todo.title}
            </span>
            <button onClick={() => dispatch(delTodo(todo.id))}>del</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
