export type SignInType = {
  token?: string;
  isAuth?: boolean;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  rememberMe?: boolean;
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
