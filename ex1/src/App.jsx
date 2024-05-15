// children : Layout 컴포넌트를 만들 때 주로 사용
// layout 컴포넌트는 자식 컴포넌트를 가지는 형태

// const User = (props) => {
//   console.log("props=>", props);
//   return <div>user {props.children}</div>;
// };

// function Layout(props) {
//   const children = props.children;
//   return (
//     <main>
//       <header>header</header>
//       {children}
//       <footer>footer</footer>
//     </main>
//   );
// }

const App = () => {
  // return <User abc="123">hi</User>;

  // return (
  //   <Layout>
  //     <div>App</div>
  //   </Layout>
  // );

  const title = "title";

  return (
    <div>
      <h1>test</h1>
      <Todo title={title} />
    </div>
  );
};

export default App;
// title 값이 혹시라도 없을 경우 대비하여 초기 값 할당
const Todo = ({ title = "no" }) => {
  // console.log("props=>", props);
  // const { title } = props;
  return (
    <div>
      <h3>{title}</h3>todo
    </div>
  );
};
