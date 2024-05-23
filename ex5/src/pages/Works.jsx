import { Link, useParams } from "react-router-dom";

const Works = () => {
  const params = useParams();

  const data = [
    { id: 1, todo: "리액트 배우기" },
    { id: 2, todo: "노드배우기" },
    { id: 3, todo: "자바스크립트 배우기" },
    { id: 4, todo: "파이어베이스 배우기" },
    { id: 5, todo: "넥스트 배우기" },
    { id: 6, todo: "HTTP 프로토콜 배우기" },
  ];

  const targetWork = data.find(function (work) {
    return work.id === parseInt(params.id);
  });
  //   console.log(targetWork);

  return (
    <div>
      <h3>현재 페이지는 {targetWork.todo}</h3>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일 : {work.id} </div>
            <Link to={`/works/${work.id}`}>
              <span>Go to : {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
