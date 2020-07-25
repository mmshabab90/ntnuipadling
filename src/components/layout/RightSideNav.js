import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class RightSideNav extends Component {
  componentDidMount() {}
  render() {
    return (
      <ul id="sidenav-right" className="sidenav">
        <li className="sidenav-close">
          <NavLink to="/">
            <i className="material-icons left">dashboard</i> Dashboard
          </NavLink>
        </li>

        <li>
          <div className="divider" />
        </li>

        <li>
          <div className="center">
            <p className="grey-text">Events</p>
          </div>
        </li>

        <li>
          <div className="divider" />
        </li>

        <li className="sidenav-close">
          <NavLink to="/addevents">
            <i className="material-icons left">event_note</i> Add Events
          </NavLink>
        </li>

        <li className="sidenav-close">
          <NavLink to="/events">
            <i className="material-icons left">event</i> Events List
          </NavLink>
        </li>

        <li>
          <div className="divider" />
        </li>

        <li className="sidenav-close">
          <NavLink to="/signin">
            <i className="material-icons left">exit_to_app</i> Log Out
          </NavLink>
        </li>
      </ul>
    );
  }
}
