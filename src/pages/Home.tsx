import React, { FC } from "react";

const Home: FC = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user?.data.id) {
  //     navigate(`/user/${user.data.id}`);
  //   }
  // }, [user]);

  const content = {
    title: "ArgentBank",
  };

  return (
    <section>
      <div className="home">
        <h1 className="home_title">{content.title}</h1>
        <div></div>
      </div>
    </section>
  );
};

export default Home;
