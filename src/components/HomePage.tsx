import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/todos">Todos</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default HomePage;
