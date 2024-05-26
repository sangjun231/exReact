import "./App.css";
import TestPage from "./components/TestPage";
import GlobalStyle from "./GlobalStyle";

// const StBox = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid ${(props) => props.borderColor};
//   margin: 20px;
// `;

// const boxList = ["red", "green", "blue"];

// const getBoxName = (color) => {
//   switch (color) {
//     case "red":
//       return "red box";
//     case "green":
//       return "green box";
//     case "blue":
//       return "blue box";
//     default:
//       return "black box";
//   }
// };

function App() {
  return (
    <>
      {/* <StBox borderColor="red">Red Box</StBox>
      <StBox borderColor="green">Green Box</StBox>
      <StBox borderColor="blue">Blue Box</StBox> */}
      {/* {boxList.map((boxColor) => {
        return (
          <StBox borderColor={boxColor} key={boxColor}>
            {getBoxName(boxColor)}
          </StBox>
        );
      })} */}
      <GlobalStyle />
      <TestPage title="제목" contents="내용" />
    </>
  );
}

export default App;
