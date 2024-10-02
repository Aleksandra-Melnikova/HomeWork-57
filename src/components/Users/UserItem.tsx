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
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Category: {user.category}</p>
          {user.check ? (
            <p className="text-black-50">Active</p>
          ) : (
            <p className="text-black-50">Not active</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
