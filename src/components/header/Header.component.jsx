import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>

    {currentUser ? (
      <div className="options">
        <div className="option">Hi, {currentUser.displayName}</div>
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <div className="option button" onClick={() => auth.signOut()}>
          LOG OUT
        </div>
      </div>
    ) : (
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/signin" className="option">
          LOGIN
        </Link>
      </div>
    )}
  </div>
);

export default Header;
