export type Error = {
  type: string;
  message: string;
  status: string;
};

export type Auth = {
  token: string;
  isAuth: boolean;
};

export type SignIn = {
  email: string;
  password: string;
};

export type Profile = {
  firstName: string;
  lastName: string;
  token: string;
};

export type Account = {
  accountId?: string;
};

export type User = {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: Date;
  updatedAt?: Date;
  id?: string;
};
