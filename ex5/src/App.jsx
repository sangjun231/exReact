import Router from "./shared/Router";

// 반드시 Link태그를 사용 할 것 , a태그는 새로고침이 되어
// 많은 상태 및 변수값들이 초기화됨
// Link태그 사용해도 브라우저상에는 a태그로 표기됨

function App() {
  return <Router />;
}

export default App;
