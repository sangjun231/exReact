import { useEffect, useState } from "react";

// function App() {
//   const [message, setMessage] = useState("타이머 시작");

//   useEffect(() => {
//     const delay = (ms) => {
//       const promise = new Promise((reslove) => {
//         setTimeout(reslove, ms);
//       });
//       return promise;
//     };
//     delay(2000).then(() => {
//       setMessage("2초 후 메시지가 변경됨");
//     });
//   }, []);

//   return (
//     <>
//       <h1>{message}</h1>
//     </>
//   );
// }

// export default App;

// function App() {
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   });

//   return (
//     <>
//       <h1></h1>
//     </>
//   );
// }

// export default App;

// function App() {
//   useEffect(() => {
//     Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
//         response.json()
//       ),
//       fetch("https://jsonplaceholder.typicode.com/posts/2").then((response) =>
//         response.json()
//       ),
//     ]).then(([response1, response2]) => {
//       console.log(response1);
//       console.log(response2);
//     });
//   }, []);

//   return (
//     <>
//       <h1></h1>
//     </>
//   );
// }

// export default App;

// const App = () => {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//       );
//       const data = await response.json();
//       setPost(data);
//     };
//     fetchPost();
//   }, []);

//   console.log(post);

//   return <></>;
// };

// export default App;

// async 사용시 문제를 방지하려면 아래처럼 => catch를 해내려면
const App = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchPost();
  }, []);

  console.log(post);

  return <>{post ? <div>{post.title}</div> : <div>Loading...</div>}</>;
};

export default App;

import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // get 요청 시, fetch는 method를 명시하지 않아도 돼요.
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? <div>{data.title}</div> : <div>Loading...</div>}</div>;
}

export default App;

import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
      });
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        <button type="submit">Create Post</button>
      </form>
      {response && <div>Created Post ID: {response.id}</div>}
    </div>
  );
}

export default App;
