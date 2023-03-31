import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCts = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCts.items.map((item) => (
        <TodoItem
          item={item}
          onRemoveTodo={todosCts.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
