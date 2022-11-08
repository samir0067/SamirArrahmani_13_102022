import React, { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setAuth } from "store/reducers/authReducer";
import argentBankLogo from "../assets/argentBankLogo.png";
import { selectUser } from "store/reducers/userReducer";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

const NavBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector(selectAuth);
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    dispatch(setAuth({ isAuth: false, token: "" }));
    localStorage.removeItem("token");
    navigate("/");
  };

  const content = {
    login: "Sign In",
    signOut: "Sign Out",
  };

  return (
    <header>
      <nav className="nav">
        <NavLink to={"/"}>
          <img
            className="nav_logo_img"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {isAuth ? (
          <div className="nav_item">
            <NavLink to={"profile"}>
              <FaUserCircle />
              {user.firstName}
            </NavLink>
            <NavLink onClick={() => handleSignOut()} to={"/"}>
              <RiLogoutBoxRLine />
              {content.signOut}
            </NavLink>
          </div>
        ) : (
          <div className="nav_item">
            <NavLink to={"sign-in"}>
              <FaUserCircle />
              {content.login}
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
