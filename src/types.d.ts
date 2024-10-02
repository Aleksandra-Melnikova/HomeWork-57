export interface IUser {
  id: string;
  name: string;
  email: string;
  check: boolean;
  category: string;
}

export interface IUserMutation {
  name: string;
  email: string;
  check: boolean;
  category: string;
}
