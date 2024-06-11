// Actions.js
import { ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETED} from "./ActionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id }
});

export const toggleCompleted = (id) => ({
    type: TOGGLE_COMPLETED,
    payload: { id },
  });
  




