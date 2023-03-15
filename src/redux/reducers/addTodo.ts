import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  CLEAR_COMPLETED_TODOS,
} from "../actions/ations";
import { TodoAction, todoState } from "../../interfaces";

const initialState: todoState = {
  todos: [],
};

export function todoReducer(
  state: todoState = initialState,
  action: TodoAction
) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            description: action.payload.description,
            dueDate: action.payload.dueDate,
            priority: action.payload.priority,
            completed: false,
          },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }
          return {
            ...todo,
            description:
              action.payload.description !== undefined
                ? action.payload.description
                : todo.description,
            dueDate:
              action.payload.dueDate !== undefined
                ? action.payload.dueDate
                : todo.dueDate,
            priority:
              action.payload.priority !== undefined
                ? action.payload.priority
                : todo.priority,
            completed:
              action.payload.completed !== undefined
                ? action.payload.completed
                : todo.completed,
          };
        }),
      };

    case CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };

    default:
      return state;
  }
}
