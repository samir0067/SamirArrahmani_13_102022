import React, { FC } from "react";

const Profile: FC = () => {
  const content = {
    title: "",
  };

  return (
    <section>
      <div className="profile">
        <h1 className="profile_title">{content.title}</h1>
        <div></div>
      </div>
    </section>
  );
};

export default Profile;
