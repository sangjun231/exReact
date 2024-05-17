import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import ExTodoForm from "./ExTodoForm";
import { useState } from "react";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "ok",
      content: "content",
      isDone: false,
    },
  ]);
  console.log(todos);
  return (
    <div>
      <ExTodoForm setTodos={setTodos} />
      <div>
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoContainer;
