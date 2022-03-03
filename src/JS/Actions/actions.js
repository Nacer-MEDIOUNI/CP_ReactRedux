import {
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
} from "../Constants/action-types";

let todoId = 0;

export const addTodo = (description) => {
  return {
    type: ADD_TODO,
    payload: { id: todoId++, description },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    payload: id,
  };
};
