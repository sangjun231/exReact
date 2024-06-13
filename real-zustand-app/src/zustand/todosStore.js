import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodosStore = create(
  persist(
    (set) => ({
      todos: [
        {
          id: 1,
          title: "Learn Zustand",
          tasks: [{ id: 1, task: "Read documentation", done: false }],
        },
      ],
      addTodo: (todoId, newTask) =>
        set(
          produce((state) => {
            const todo = state.todos.find((todo) => todo.id === todoId);
            if (todo) {
              todo.tasks.push(newTask); // 불변성 깨짐: 직접 수정
            }
            // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
          })
        ),
      toggleTodo: (todoId, taskId) =>
        set(
          produce((state) => {
            const todo = state.todos.find((todo) => todo.id === todoId);
            if (todo) {
              const task = todo.tasks.find((task) => task.id === taskId);
              if (task) {
                task.done = !task.done; // 불변성 깨짐: 직접 수정
              }
            }
            // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
          })
        ),
    }),
    {
      name: "todos-storage", // 저장소 이름을 설정해요!
      // getStorage: () => sessionStorage, // localStorage가 아닌 곳에 저정하고 싶다면!
    }
  )
);

export default useTodosStore;
