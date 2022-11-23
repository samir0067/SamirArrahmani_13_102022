import axios, { AxiosResponse } from "axios";
import { SignInType } from "utils/types";

const fetchSignIn = async (request: SignInType) => {
  return axios
    .post(`http://localhost:3001/api/v1/user/login`, request)
    .then((response: AxiosResponse) => {
      console.log("fetchSignIn ==> ", response.data);
      return response.data.body.token;
    });
};

const getUserProfile = async (token?: string) => {
  return axios
    .post(
      `http://localhost:3001/api/v1/user/profile`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response: AxiosResponse) => {
      return response.data.body;
    });
};

const apiFetch = {
  fetchSignIn,
  getUserProfile,
};

export default apiFetch;
