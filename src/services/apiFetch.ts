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
      console.log("getUserProfile ==> ", response.data);
      return response.data.body;
    });
};

const updateUserProfile = async (request: SignInType) => {
  return axios
    .put(`http://localhost:3001/api/v1/user/profile`, request, {
      headers: { Authorization: `Bearer ${request.token}` },
    })
    .then((response: AxiosResponse) => {
      console.log("updateUserProfile ==> ", response.data);
      return response.data;
    });
};

const apiFetch = {
  fetchSignIn,
  getUserProfile,
  updateUserProfile,
};

export default apiFetch;
