import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";

/**
 * functional component for the page note found
 */
const NotFound: FC = () => {
  const navigate = useNavigate();

  const content = {
    title: "404",
    message: "Oops! the page you asked for does not exist.",
    link: "Return to the home page",
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
