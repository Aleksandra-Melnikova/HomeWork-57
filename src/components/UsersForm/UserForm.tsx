import { useState } from "react";
import { IUserMutation } from "../../types";
import * as React from "react";
import { IUser } from '../../types';


interface Props {
  addNewUser: (user: IUser) => void;
}


const UserForm:React.FC<Props> = ({addNewUser}) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    category: '',
    check: false,
  });


  const category =[
    {title:'user'},
    {title:'editor'},
    {title:'admin'},
  ]

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(newUser);
  };


  const changeActiveStatus = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.checked,
      };
    });
    console.log(newUser);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.name.trim().length === 0 && newUser.email.trim().length ) {
      alert("Заполните все поля!");
    } else {
      addNewUser({
        id: String(new Date()),
        ...newUser,
      });

      setNewUser({
        name: "",
        email: "",
        category: '',
        check: false,
      });
    }
  };


  return (
    <>
    <form onSubmit={onSubmit}>
      <h3>Add new dish</h3>
      <div className="form-group mb-2">
        <label htmlFor="name">Title:</label>
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

      <div className="form-group mb-2">
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
      <div className="form-group mb-2">
        <select
          id='category'
          value={newUser.category}
          onChange={changeUser}
          name="category"
          className="form-control">
          <option value="" disabled>Select a category</option>
          {category.map((c) => (
            <option key={c.title} value={c.title}>{c.title}</option>
          ))}
        </select>

      </div>

      <div className="form-group mb-2">
        <label htmlFor="activeStatus">Active or not active</label>
        <input
          onChange={changeActiveStatus}
          type="checkbox"
          id="check"
          name="check"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
    </>
  );
};

export default UserForm;
