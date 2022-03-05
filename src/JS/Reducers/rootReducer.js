import {
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  EDIT_TODO,
} from "../Constants/action-types";

const initialState = {
  todos: [
    {
      id: Math.random(),
      description: "Task by default",
      done: false,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload),
          ...state.todos.slice(action.payload + 1),
        ],
      };

    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, description: action.payload.newDescription }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
