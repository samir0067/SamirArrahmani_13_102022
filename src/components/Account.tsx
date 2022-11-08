import React, { FC } from "react";
import Button from "components/Button";

type AccountProps = {
  title: string;
  amount: string;
  description: string;
  titleButton?: string;
};

const Account: FC<AccountProps> = ({
  title,
  amount,
  description,
  titleButton,
}) => {
  return (
    <section className="account">
      <div className="account_content">
        <h3 className="account_content_title">{title}</h3>
        <p className="account_content_amount">{amount}</p>
        <p className="account_content_description">{description}</p>
      </div>
      <div className="account_cta">
        <Button title={titleButton!} style="account_cta_button" />
      </div>
    </section>
  );
};

Account.defaultProps = {
  titleButton: "View transactions",
};

export default Account;
