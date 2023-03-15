export interface TodoState {
  id: string;
  description: string;
  dueDate: Date;
  priority: string;
  completed: boolean;
}

export interface TodoAction {
  type: string;
  payload: {
    id: string;
    description: string;
    dueDate: Date;
    priority: string;
    completed?: boolean;
  };
}

export interface todoState {
  todos: TodoState[];
}
