export type ErrorType = {
  type: string;
  message: string;
  status: string;
};

export type AuthType = {
  token: string;
  isAuth: boolean;
};

export type UserType = {
  firstName: string;
  lastName: string;
  token: string;
};

export type AccountType = {
  accountId?: string;
  name?: string;
  sold?: number;
  status?: string;
  id?: string;
};

// TODO a fixer
// export type ProfileType = {
//   email?: string;
//   password?: string;
//   firstName?: string;
//   lastName?: string;
//   createdAt?: Date;
//   updatedAt?: Date;
//   id?: string;
// };
