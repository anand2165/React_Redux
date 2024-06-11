// Reducers.js
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
} from "./ActionTypes";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
      };
   
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload.id),
      };

      case TOGGLE_COMPLETED:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.id
              ? { ...todo, completed:!todo.completed }
              : todo
          ),
        };

      

      default:
        return {
          ...state
        }
  }
};

export default todoReducer;
