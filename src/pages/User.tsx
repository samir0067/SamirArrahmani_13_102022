import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSignInUser, selectSignIn } from "store/reducers/signInReducer";
import Button from "components/Button";
import Account from "components/Account";
import FormEditName from "components/FormEditName";
import apiCall from "services/apiCall";

/**
 * functional component for the user page
 */
const User: FC = () => {
  document.title = "Argent Bank - User Page";
  const dispatch = useDispatch();
  const signIn = useSelector(selectSignIn);
  const [editName, setEditName] = useState<boolean>(false);

  /**
   *  Get to the user's profile
   */
  const handleGetUserProfile = async () => {
    const responseApi = await apiCall.getUserProfile(signIn.token);
    if (responseApi) {
      dispatch(
        getSignInUser({
          firstName: responseApi.firstName,
          lastName: responseApi.lastName,
        })
      );
    }
  };

  useEffect(() => {
    handleGetUserProfile().then();
  }, []);

  const handleEditUser = () => {
    setEditName(!editName);
  };

  return (
    <main className="bg-dark user">
      <div className="user_header">
        <h1>
          Welcome back <br />
        </h1>
        {editName ? (
          <FormEditName editName={editName} setEditName={setEditName} />
        ) : (
          <>
            {signIn?.firstName} {signIn?.lastName} !
            <div className="user_header_button">
              <Button
                title="Edit Name"
                onClick={handleEditUser}
                style="user_header_button"
              />
            </div>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <div>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </div>
    </main>
  );
};

export default User;
