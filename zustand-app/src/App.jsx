import useTodosStore from "./zustand/todosStore.js";

function App() {
  const { todos, addTodo, toggleTodo } = useTodosStore();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => addTodo(prompt("새로운 todolist를 입력해주세요."))}
      >
        Add Todo
      </button>
    </div>
  );
}

export default App;
