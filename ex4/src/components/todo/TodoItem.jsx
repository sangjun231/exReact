const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const toggleTodo2 = () => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) todo.isDone = !todo.isDone;
      return todo;
    }))
  }

  return (
    <div className="todoCard">
      <h3 className="todoTitle">{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <button onClick={toggleTodo}>{isDone ? "취소" : "완료"}</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
