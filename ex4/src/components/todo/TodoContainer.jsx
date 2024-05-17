import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import ExTodoForm from "./ExTodoForm";
import { useState } from "react";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "ok",
      content: "content111",
      isDone: false,
    },
    {
      id: 2,
      title: "ok2",
      content: "content222",
      isDone: true,
    },
  ]);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <section>
      <h1 className="title">Todo List</h1>
      <ExTodoForm setTodos={setTodos} />
      <TodoList title="Working" todos={workingTodos} />
      <TodoList title="Done" todos={doneTodos} />
    </section>
  );
};

export default TodoContainer;
