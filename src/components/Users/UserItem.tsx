import { IUser } from "../../types";

interface Props {
  user: IUser;
}

const UserItem: React.FC<Props> = ({ user }) => {

  return (
    <div className="card mb-3 p-4">
      <div className="row justify-content-between">
        <div className="col-8">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">Category: {user.category} SOM</p>
          {user.check ? <p>Active</p> : <p>Not active</p>}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
