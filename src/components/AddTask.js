import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../actions/todoActions";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const save = useSelector((state) => state.todoReducer.save);
  useEffect(() => {
    if (save) setInput(save.description);
  }, [save]);
  return (
    <div>
      <input
        value={input}
        type="text"
        placeholder="add a new todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          if (save) dispatch(editTodo(input));
          else
            dispatch(
              addTodo({
                id: uuidv4(),
                description: input,
                isDone: false,
              })
            );
          setInput("");
        }}
      >
        {save ? "update" : "add"}
      </button>
    </div>
  );
};

export default AddTask;
