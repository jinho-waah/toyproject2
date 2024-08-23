import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function AddForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addTodo({ id: new Date().getTime(), title: todo }));
        }}
      >
        add
      </button>
    </div>
  );
}

export default AddForm;
