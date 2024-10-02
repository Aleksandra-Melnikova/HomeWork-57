import { useState } from "react";
import { IUserMutation } from "../../types";
import * as React from "react";
import { IUser } from "../../types";

interface Props {
  addNewUser: (user: IUser) => void;
}

const UserForm: React.FC<Props> = ({ addNewUser }) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    category: "",
    check: false,
  });

  const category = [{ title: "user" }, { title: "editor" }, { title: "admin" }];

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const changeActiveStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.checked,
      };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      newUser.name.trim().length === 0 ||
      newUser.email.trim().length === 0 ||
      newUser.category.trim().length === 0
    ) {
      alert("Заполните все поля!");
    } else {
      addNewUser({
        id: String(new Date()),
        ...newUser,
      });

      setNewUser({
        name: "",
        email: "",
        category: "",
        check: false,
      });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>Add new user</h3>
        <div className="form-group mb-2">
          <label htmlFor="name">User name:</label>
          <input
            type="text"
            onChange={changeUser}
            value={newUser.name}
            id="name"
            name="name"
            required
            className="form-control"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={newUser.email}
            id="email"
            name="email"
            onChange={changeUser}
            required
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          {category.length > 0 ? (
            <select
              required
              id="category"
              value={newUser.category}
              onChange={changeUser}
              name="category"
              className="form-select"
            >
              <option value="" disabled>
                Select a category
              </option>
              {category.map((c) => (
                <option key={c.title} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
          ) : null}
        </div>

        <div className="form-group mb-2 text-center">
          <label className="me-2 form-check-label" htmlFor="activeStatus">
            Active
          </label>
          <input
            className="form-check-input"
            onChange={changeActiveStatus}
            type="checkbox"
            id="check"
            name="check"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add new user
        </button>
      </form>
    </>
  );
};

export default UserForm;
