// 불변성을 유지 안하는 예시
import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

// Zustand 스토어 생성
const useTodosStore = create(
  persist(
    immer((set) => ({
      todos: [],
      addTodo: (text) =>
        set((state) => {
          // 불변성을 어기는 예시: 직접 배열을 수정
          state.todos.push({ id: Date.now(), text, completed: false });
          return state;
        }),
      toggleTodo: (id) =>
        set((state) => {
          // 불변성을 어기는 예시: 직접 객체를 수정
          const todo = state.todos.find((todo) => todo.id === id);
          if (todo) {
            todo.completed = !todo.completed;
          }
          return state;
        }),
    })),
    {
      name: "todos-store",
      getStorage: () => sessionStorage,
    }
  )
);

export default useTodosStore;

// 불변성을 유지하는 예시
// import create from "zustand";
// import { immer } from "zustand/middleware/immer";

// const useTodosStore = create(
//   immer((set) => ({
//     todos: [
//       {
//         id: 1,
//         title: "Learn Zustand",
//         tasks: [{ id: 1, task: "Read documentation", done: false }],
//       },
//     ],
//     addTask: (todoId, newTask) =>
//       set((state) => {
//         const todo = state.todos.find((todo) => todo.id === todoId);
//         if (todo) {
//           todo.tasks.push(newTask); // 불변성 유지: immer가 자동으로 처리
//         }
//         // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
//       }),
//     toggleTask: (todoId, taskId) =>
//       set((state) => {
//         const todo = state.todos.find((todo) => todo.id === todoId);
//         if (todo) {
//           const task = todo.tasks.find((task) => task.id === taskId);
//           if (task) {
//             task.done = !task.done; // 불변성 유지: immer가 자동으로 처리
//           }
//         }
//         // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
//       }),
//   }))
// );

// export default useTodosStore;
