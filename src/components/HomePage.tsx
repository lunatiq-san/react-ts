import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import Card, { CardVariant } from "./Card";
import EventsExample from "./EventsExample";
import styles from "./HomePage.module.css";

const HomePage: FC = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/users" className={styles.link}>
          Users
        </Link>
        <Link to="/todos" className={styles.link}>
          Todos
        </Link>
      </nav>
      <Outlet />

      <EventsExample />
      <Card
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
        onClick={(num: number) => {
          console.log("click", num);
        }}
      >
        <button>Button</button>
      </Card>
    </div>
  );
};

export default HomePage;
