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
import SIgnUp from "./components/auth/SIgnUp";
import CreateEvent from "./components/Events/CreateEvent";
import EventDetails from "./components/Events/EventDetails";

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
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/events" component={Events} />
              <Route path="/event/:id" component={EventDetails} />
              <Route path="/addevents" component={CreateEvent} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SIgnUp} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
