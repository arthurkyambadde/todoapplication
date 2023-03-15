import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED_TODOS,
} from "./ations";

export function addTodo(
  id: string,
  description: string,
  dueDate: Date,
  priority: string
) {
  return {
    type: ADD_TODO,
    payload: {
      id,
      description,
      dueDate,
      priority,
    },
  };
}

export function updateTodo(
  id: string,
  updates: { description?: string; dueDate?: Date; priority?: string }
) {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      updates,
    },
  };
}

export function deleteTodo(id: string) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}

export function toggleTodo(id: string) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

export function clearCompletedTodos() {
  return {
    type: CLEAR_COMPLETED_TODOS,
  };
}
