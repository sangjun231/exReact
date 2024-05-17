const TodoItem = ({ todo }) => {
  return (
    <div className="todoCard">
      <h3 className="todoTitle">{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <button>완료</button>
        <button>취소</button>
      </div>
    </div>
  );
};

export default TodoItem;
