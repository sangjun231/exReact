import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div>
      <h1>대쉬보드!</h1>
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;
