// 제어 , 비제어 컴포넌트
// 제어 컴포넌트 : 개발자가 매순간 개입하므로 코드가 많아짐
// 비제어 '' : 한 순간만 개입하여 코드가 단순해짐

// 제어 컴포넌트
import { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoForm;
