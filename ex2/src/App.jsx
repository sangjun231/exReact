import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        // onChange 와 value를 쌍으로 묶는게 좋음 -> 제어 컴포넌트
        // value없어도 동작은 함 -> 비제어 컴포넌트
        onChange={handleInputChange}
        value={text}
        //   onChange={(event) =>
        //   {setText(event.target.value);}
        // }
      />
      <br />
      {text}
    </div>
  );
};

export default App;
