import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, saveTodo, doneTodo } from "../actions/todoActions";
const handleFilter = (todo, filter) => {
  switch (filter) {
    case "done":
      return todo.filter((el) => el.isDone === true);
    case "undone":
      return todo.filter((el) => el.isDone === false);
    case "done":
    default:
      return todo;
  }
};
const ListTask = () => {
  const todo = useSelector((state) => state.todoReducer.todos);
  const filter = useSelector((state) => state.todoReducer.filterTodo);
  const dispatch = useDispatch();
  const result = handleFilter(todo, filter);
  return (
    <div>
      {result.map((el) => (
        <div style={{ color:"red"}}>
          <h3>{el.description}</h3>
          <button onClick={() => dispatch(deleteTodo(el.id))}>delete</button>
          <button onClick={() => dispatch(saveTodo(el))}>edit</button>
          <button onClick={() => dispatch(doneTodo(el.id))}>
            {el.isDone ? "done" : "not done"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTask;
