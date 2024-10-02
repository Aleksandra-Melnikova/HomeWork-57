import { useState } from "react";
import { IUserMutation } from "../../types";
import * as React from "react";



const UserForm = () => {
  const category =[
    {title:'user'},
    {title:'editor'},
    {title:'admin'},
  ]
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    category: '',
    check: false,
  });

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



  const soldCheckbox = ({ target: {checked} }) => {
    const copyNewUser= {...newUser};
    copyNewUser.check = checked;
    setNewUser(copyNewUser);
    console.log(newUser);
  };


  return (
    <>
    <form>
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
        <label htmlFor="activeStatus">Active or non-active</label>
        <input
          checked={newUser.check}
          onChange={soldCheckbox}
          type="checkbox"
          id="activeStatus"
          name="activeStatus"
          required
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
