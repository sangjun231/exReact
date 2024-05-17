import TodoItem from "./TodoItem";

const TodoList = ({ title, todos }) => {
  return (
    <div>
      <h2 className="todoListTitle">{title}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
