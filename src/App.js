import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Topbar from "./components/layout/Topbar";
import LeftSideNav from "./components/layout/LeftSideNav";
import RightSideNav from "./components/layout/RightSideNav";
import Dashboard from "./components/dashboard/Dashboard";
import { Switch } from "react-router-dom";
import Events from "./components/Events/Events";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateEvent from "./components/Events/CreateEvent";
import EventDetails from "./components/Events/EventDetails";
import ProtectedRoute from "./ProtectedRoute";

export default class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Topbar />
          </header>
          <LeftSideNav />
          <RightSideNav />

          <main>
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signup" component={SignUp} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <ProtectedRoute exact path="/events" component={Events} />
              <ProtectedRoute exact path="/events-readonly" component={Events} />
              <ProtectedRoute path="/event/:id" component={EventDetails} />
              <ProtectedRoute path="/addevents" component={CreateEvent} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
