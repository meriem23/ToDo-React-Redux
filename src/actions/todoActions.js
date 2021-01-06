import {
  DELETE_TODO,
  ADD_TODO,
  SAVE_TODO,
  EDIT_TODO,
  DONE_TODO,
  FILTER_TODO,
} from "./types";

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const saveTodo = (todoSaved) => {
  return {
    type: SAVE_TODO,
    payload: todoSaved,
  };
};
export const editTodo = (todoEdited) => {
  return {
    type: EDIT_TODO,
    payload: todoEdited,
  };
};
export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    payload: id,
  };
};
export const filterTodo = (filterValue) => {
  return {
    type: FILTER_TODO,
    payload: filterValue,
  };
};
