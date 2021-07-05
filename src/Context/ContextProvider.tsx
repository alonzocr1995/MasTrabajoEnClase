import React, { createContext, useState } from "react";

type TodoContextState = {
  todos: string[];
  addTodo: (name: string) => void;
};

const defaultValues: TodoContextState = {
  todos: [],
  addTodo: () => {},
};

export const TodosContext = createContext<TodoContextState>(defaultValues);

const TodosProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<string[]>(defaultValues.todos);

  const addTodo = (newItem: string) =>
    setTodos((previousTodos) => [...previousTodos, newItem]);

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
