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
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          LOG OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          LOGIN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
