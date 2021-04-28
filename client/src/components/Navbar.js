import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';

const NavBar = ({user}) => {
 console.log(user);
 let {isAuthenticated}=user;
 console.log(isAuthenticated);
 const onLogout=async(req, res)=>{
       try {
          isAuthenticated = false;
          localStorage.removeItem("token");
          isAuthenticated=false;
          res.redirect("/");
         
       } catch (err) {
         console.log("error occurred! ", err);
       }
 }

 const authLinks = (
   <Fragment>
     <li style={{ fontSize: "1.5rem" }}>
       {" "}
       Hello {isAuthenticated && user.user.data.name}{" "}
     </li>
     
      
       <Link style={{ fontSize: "1.5rem" }} to="/room">
         Join Meeting
       </Link>
     
     <a onClick={onLogout} href="/logout">
       <i className="fas fa-sign-out-alt"></i>

       <span className="hide-sm">Logout</span>
     </a>
   </Fragment>
 );
 const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>{" "}
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className="fas fa-video"></i>
        WeMeet
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};
NavBar.defaultProps={
  title:"WeMeet",
  icon:"",
};

export default NavBar;