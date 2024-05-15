// import { useState } from "react";

// // 원시데이터 : x=1 , y=1 -> 같은 1을 참조하며 변경 시 새로운 공간 할당
// // 참조데이터 : 객체 , 배열 , 함수
// // -> 값이 같아도 다른 공간 참조 / 변경 시 공간 자체 변경

// // 리액트는 리랜더링 실행 여부를 state의 변화로 결정함.

// const App = () => {
//   const [dogs, setDogs] = useState(["말티즈"]);
//   const onClickHandler = () => {
//     // push는 기존 값을 변경하므로 불변성을 깨뜨림
//     // dogs.push("시고르");
//     setDogs([...dogs, "시고르"]);
//   };
//   console.log(dogs);

//   return (
//     <div>
//       <button onClick={onClickHandler}>버튼</button>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    // items.push(items.length + 1); 배열에 직접 push, 불변성 위반
    setItems([...items, ++items.length]); // 상태 업데이트
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
