// 리액트로 개발한 앱은 컴포넌트라는 조각을 구성됨
// -> UI구축을 훨씬 쉽게 만들어줌
// 컴포넌트를 생성하고 UI 요소를 컴포넌트 내부에서 JSX통해 선언
// -> 리액트가 반응 -> 리액트 컴포넌트가 '선언체'라는 개념이 아주 중요

// 리액트에서 랜더링은 현재 props와 state의 상태에 기초하여
// UI구성을 어떻게 구성할지 컴포넌트에게 요청하는 작업을 의미
// triggering -> rendering -> commit 순으로 진행
// 브라우저 랜더링은 다른 프로세스로 페인팅 이라고도 부름

import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <h1>Layout</h1>
    </Layout>
  );
};

export default App;
