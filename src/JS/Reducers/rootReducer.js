import { ADD_TODO, DELETE_TODO, DONE_TODO } from "../Constants/action-types";

const initialState = {
  todos: [
    {
      id: 0,
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
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            done: false,
          },
        ],
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

    default:
      return state;
  }
};

export default rootReducer;
