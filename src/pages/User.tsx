import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/reducers/userReducer";
// import { selectAccount } from "store/reducers/accountReducer";
// import { selectError } from "store/reducers/errorReducer";
import Button from "components/Button";
import Account from "components/Account";
import FormEditName from "components/FormEditName";

const User: FC = () => {
  // TODO a fixer
  // const account = useSelector(selectAccount);
  // const errorMessage = useSelector(selectError);
  const user = useSelector(selectUser);
  const [editName, setEditName] = useState<boolean>(false);

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
            {user?.firstName} {user?.lastName}!
            <div className="user_header_button">
              <Button
                title="Edit Name"
                onClick={() => undefined}
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
