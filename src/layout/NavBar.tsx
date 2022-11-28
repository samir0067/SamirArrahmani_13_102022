import React, { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSignIn, signOut } from "store/reducers/signInReducer";
import argentBankLogo from "../assets/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

/**
 * navigation component of the application
 */
const NavBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, firstName } = useSelector(selectSignIn);

  const handleSignOut = () => {
    dispatch(signOut({}));
    localStorage.clear();
    navigate("/");
  };

  const content = {
    onlyTitle: "Argent Bank",
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
          <h1 className="sr-only">{content.onlyTitle}</h1>
        </NavLink>
        {isAuth ? (
          <div className="nav_item">
            <NavLink to="profile">
              <FaUserCircle />
              {firstName}
            </NavLink>
            <NavLink onClick={handleSignOut} to="/">
              <RiLogoutBoxRLine />
              {content.signOut}
            </NavLink>
          </div>
        ) : (
          <div className="nav_item">
            <NavLink to="sign-in">
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
