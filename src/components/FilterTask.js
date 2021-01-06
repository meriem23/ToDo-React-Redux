import React from "react";
import { useDispatch } from "react-redux";
import { filterTodo } from "../actions/todoActions";

const FilterTask = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterTodo(e.target.value));
  };
  return (
    <div>
      <form>
        <input
          type="radio"
          name="filterTodo"
          value="no-filter"
          onChange={handleChange}
        />
        <label>No Filter</label>
        <br />
        <input
          type="radio"
          name="filterTodo"
          value="done"
          onChange={handleChange}
        />
        <label> Todo Done </label>
        <br />
        <input
          type="radio"
          name="filterTodo"
          value="undone"
          onChange={handleChange}
        />
        <label>Todo Not Done</label>
      </form>
    </div>
  );
};

export default FilterTask;
