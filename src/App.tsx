import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TodoItemPage from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UsersPage from "./components/UsersPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserItemPage />} />
        <Route path="todos" element={<TodosPage />}>
          <Route path=":id" element={<TodoItemPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
