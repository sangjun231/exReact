import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map(function (todo) {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
};

export default TodoList;
