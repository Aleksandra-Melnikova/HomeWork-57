import ToolBar from "./components/ToolBar/ToolBar.tsx";
import UserForm from "./components/UsersForm/UserForm.tsx";
import { useState } from "react";
import { IUser } from "./types";
import Users from "./components/Users/Users.tsx";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: "1",
      name: "Sasha",
      email: "Sasha123@mail.ru",
      category: "user",
      check: false,
    },

    {
      id: "2",
      name: "Misha",
      email: "Misha123@mail.ru",
      category: "editor",
      check: true,
    },
    {
      id: "3",
      name: "Vasya",
      email: "Vasya123@mail.ru",
      category: "user",
      check: false,
    },
  ]);

  const addNewUser = (newUser: IUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-6 mb-2">
            <UserForm addNewUser={addNewUser} />
          </div>
          <div className="col-4 mb-2">
            <Users users={users} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
