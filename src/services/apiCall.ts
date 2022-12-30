import axios, { AxiosResponse } from "axios";
import { SignInType } from "utils/types";

/**
 * Fetch the login user
 * @param { SignInType } request
 */
const fetchSignIn = async (request: SignInType) => {
  return axios
    .post(`http://localhost:3001/api/v1/user/login`, request)
    .then((response: AxiosResponse) => {
      return response.data.body.token;
    });
};

/**
 * Get the profile by token
 * @param { string } token token identification
 */
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

/**
 * Update the user's profile
 * @param { SignInType } request
 */
const updateUserProfile = async (request: SignInType) => {
  return axios
    .put(`http://localhost:3001/api/v1/user/profile`, request, {
      headers: { Authorization: `Bearer ${request.token}` },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    });
};

/**
 * Send the call function to the API
 */
const apiCall = {
  fetchSignIn,
  getUserProfile,
  updateUserProfile,
};

export default apiCall;
