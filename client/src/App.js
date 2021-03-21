import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import MainPage from "./components/MainPage";
import Room from './components/room';
class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/room' component={Room}></Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={MainPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
