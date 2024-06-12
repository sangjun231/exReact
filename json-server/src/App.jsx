import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState({
    title: "",
  });
  const [targetId, setTargetId] = useState("");
  const [editTodo, setEditTodo] = useState({
    title: "",
  });

  const onSubmitHandler = async (todo) => {
    const { data } = await axios.post("http://localhost:4000/todos", todo);
    //끝나고 나면 -> await는 반드시 처리가 끝나기를 기다리고 실행
    setTodos([...todos, data]);
  };

  // 만일 fetch를 사용했다면, 이렇게 JSON.stringify를 '직접' 해줘야 함
  // await fetch("http://localhost:4000/todos", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(todo),
  // });

  const onDeleteHandler = async (id) => {
    await axios.delete("http://localhost:4000/todos/" + id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onEditHandler = async (targetId, editTodo) => {
    await axios.patch("http://localhost:4000/todos/" + targetId, editTodo);
    const newTodos = todos.map((todo) => {
      if (todo.id === targetId) {
        return {
          ...todo,
          title: editTodo.title,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // 구조 분해 할당으로 get 내부의 data 접근
        const { data } = await axios.get("http://localhost:4000/todos");
        setTodos(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchPost();
  }, []);

  console.log(todos);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <div>
          <input
            type="text"
            placeholder="수정하고싶은 Todo Id를 입력"
            onChange={(e) => {
              setTargetId(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="수정할 값 입력"
            onChange={(e) => {
              setEditTodo({ ...editTodo, title: e.target.value });
            }}
          />
          <button
            type="button"
            onClick={() => {
              onEditHandler(targetId, editTodo);
            }}
          >
            수정하기
          </button>
        </div>
        <input
          type="text"
          onChange={(e) => {
            setTodo({ ...todo, title: e.target.value });
          }}
        />
        <button type="submit">추가하기</button>
      </form>
      {/* 옵셔널 체이닝 -> null or undefined일 경우 undefined 리턴
      null은 map 메서드가 없음으로 오류 발생 */}
      {todos?.map((todo) => {
        return (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <button
              onClick={() => {
                onDeleteHandler(todo.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </>
  );
};

export default App;
