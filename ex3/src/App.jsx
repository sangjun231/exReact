import { useState } from "react";
import "./App.css";

// 원시데이터 : x=1 , y=1 -> 같은 1을 참조하며 변경 시 새로운 공간 할당
// 참조데이터 : 객체 , 배열 , 함수
// -> 값이 같아도 다른 공간 참조 / 변경 시 공간 자체 변경

// 리액트는 리랜더링 실행 여부를 state의 변화로 결정함.

function App() {
  return <div></div>;
}

export default App;
