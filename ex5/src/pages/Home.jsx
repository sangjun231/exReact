import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Component</h1>
      <button
        onClick={() => {
          navigate("/works");
        }}
      >
        works로 이동
      </button>
    </div>
  );
};

export default Home;
