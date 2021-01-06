import { v4 as uuidv4 } from "uuid";
import {
  DELETE_TODO,
  ADD_TODO,
  SAVE_TODO,
  DONE_TODO,
  EDIT_TODO,
  FILTER_TODO,
} from "../actions/types";
const todos = [
  {
    id: uuidv4(),
    description: "work",
    isDone: false,
  },
  {
    id: uuidv4(),
    description: "eat",
    isDone: false,
  },
  {
    id: uuidv4(),
    description: "sleep",
    isDone: false,
  },
];

const todoReducer = (
  state = { save: "null", filterTodo: "no-filter", todos },
  action
) => {
  switch (action.type) {
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case SAVE_TODO:
      return { ...state, save: action.payload };
    case EDIT_TODO:
      return {
        save: null,
        todos: state.todos.map((el) =>
          el.id === state.save.id ? { ...el, description: action.payload } : el
        ),
      };
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case FILTER_TODO:
      return { ...state, filterTodo: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
