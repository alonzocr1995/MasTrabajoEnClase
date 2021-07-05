import React, { useContext } from "react";
import { TodosContext } from "./Context/ContextProvider";

const ToDos: React.FC = () => {
  const { todos, addTodo } = useContext(TodosContext);
  const handleAdd = (item: string) => {
    addTodo(item);
  };
  return (
    <>
      {todos.map((todo, i) => {
        return <div key={i}>{todo}</div>;
      })}
      <button onClick={() => handleAdd("new todo item")}>Add</button>
    </>
  );
};

export default ToDos;
