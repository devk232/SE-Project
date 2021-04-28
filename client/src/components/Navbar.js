import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const NavBar = ({ user }) => {
  console.log(user);
  let { isAuthenticated } = user;
  const authLinks = (
    <Fragment>
      <li className="pt-2">
        Hello {isAuthenticated && user.user.data.name}{" "}
      </li>
      <Link to="/room">
        Join Meeting
      </Link>
      <Link to="/logout">
        <i className="fas fa-sign-out-alt"></i>
        Logout
      </Link>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register" className="mb-1">Register</Link>
      </li>
      <li>
        <Link to="/login" className="mb-1">Login</Link>{" "}
      </li>
    </Fragment>
  );

  return (
    <div className="navbar navbar bg-primary p-1 mb-1">
      <h3>
        <i className="fas fa-video"></i>
        WeMeet
      </h3>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};
NavBar.defaultProps = {
  title: "WeMeet",
  icon: "",
};

export default NavBar;
