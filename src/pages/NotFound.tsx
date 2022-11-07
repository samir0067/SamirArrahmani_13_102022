import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";

const NotFound: FC = () => {
  const navigate = useNavigate();

  const content = {
    title: "404",
    message: "Oups! La page que vous demandez n'existe pas.",
    link: "Retourner sur la page d’accueil",
  };

  return (
    <main>
      <div className="notFound">
        <h1 className="notFound_title">{content.title}</h1>
        <p className="notFound_text">{content.message}</p>
        <Button
          title={content.link}
          onClick={async () => navigate("/")}
          style="notFound_button"
        />
      </div>
    </main>
  );
};

export default NotFound;
