import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Planner from "../pages/Planner";
import Partner from "../pages/Partner";
import Pricing from "../pages/Pricing";

import Login from "../Profiles/Login/Login";
import Register from "../Profiles/Signup/Signup";
// import Authentication from "../Profiles/Welcome/Welcome";
// import ForgotPW from "../Profiles/Welcome/Welcome";
import Profile from "../Profiles/Profile/Profile";
import CompleteProfile from "../Profiles/CompleteProfile/CompleteProfile";

// import Login from '../pages/Login';
// import Registration from '../pages/Registration';
// import ResetPassword from '../pages/ResetPassword';

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/Home" render={props => <Home />} />
        <Route exact path="/Planner" render={props => <Planner />} />
        <Route exact path="/Partner" render={props => <Partner />} />
        <Route exact path="/Pricing" render={props => <Pricing />} />

        {/* <Route
          exact
          activeClassName="active"
          path="/Authetication"
          render={props => <Authentication />}
        /> */}
        <Route
          exact
          activeClassName="active"
          path="/Signin"
          render={props => <Login />}
        />
        <Route
          exact
          activeClassName="active"
          path="/signup"
          render={props => <Register />}
        />
        {/* <Route
          exact
          activeClassName="active"
          path="/forgotPassword"
          render={props => <ForgotPW />}
        /> */}
        <Route
          exact
          activeClassName="active"
          path="/signup"
          render={props => <Register />}
        />

        <Route
          exact
          activeClassName="active"
          path="/Profile"
          render={props => <Profile />}
        />
        <Route
          exact
          activeClassName="active"
          path="/CompleteProfile"
          render={props => <CompleteProfile />}
        />
      </Switch>
    );
  }
}

export default Body;

// <Route exact path='/Login' render={(props) => <Login />}/>
// <Route exact path='/Registration' render={(props) => <Registration />}/>
// <Route exact path='/ResetPassword' render={(props) => <ResetPassword />}/>
