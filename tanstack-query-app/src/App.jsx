import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

function App() {
  // main.js에서 만든 상수를 가져다 쓰는 것
  const queryClient = useQueryClient();

  const [todoItem, setTodoItem] = useState("");

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:4000/todos");
    return response.data;
  };

  const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4000/todos", newTodo);
  };

  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    // data를 캐싱하는기준(서버에 요청x 가지고있는 기준은 queryKey)
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      alert("data!");
      // query가 더이상 유효하지 않다고 알려주고 , 반드시 queryKey를 가짐
      queryClient.invalidateQueries(["todos"]);
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!!</div>;
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodoObj = { title: todoItem, isDone: false };
          mutate(newTodoObj);
        }}
      >
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "aliceblue",
              }}
            >
              <h4>{todo.title}</h4>
              <p>{todo.isDone ? "Done" : "Not Done"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
