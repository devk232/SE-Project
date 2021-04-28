import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Register from "./components/register";
import LogOut from "./components/Logout";
import MainPage from "./components/MainPage";
import Video from "./components/video";
import Home from "./components/room";
import http from "./services/httpService";
import { Nav } from "reactstrap";
import { APIEndPoint } from "./config.json";
import { Fragment } from "react";
import Logout from './components/Logout';
import { startCase } from "lodash";

const App = () => {
  const [user, setUser] = useState({
    isAuthenticated: false,
  });
  if(localStorage.length>0){
     const Start=async()=>{
       const jwt=localStorage.getItem("token");
       const user_jwt = jwtDecode(jwt);
      const USER = await http.get(
        `http://localhost:4001/users/${user_jwt._id}`
      );
      setUser({user:USER, isAuthenticated:true});
       };
        Start();
     }

  
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar user={user} />
          <div className="container">
            <Switch>
            <Route path="/room/:url" render={(props) => <Video {...props} user={user} />} />
            <Route path="/room" render={(props) => <Home {...props} user={user} />} />   
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={MainPage}/> 
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
}

export default App;
