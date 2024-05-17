// 비제어 컴포넌트
const ExTodoForm = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    // 시작과 끝에 공백 문자를 제거 -> trim()
    if (!title.trim() || !content.trim()) {
      return alert("no!");
    }

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    // useState의 비동기성
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목" name="title" />
        <input type="text" placeholder="내용" name="content" />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};
export default ExTodoForm;
