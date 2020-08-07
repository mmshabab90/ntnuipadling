import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Section } from "react-materialize";

class LeftSideNav extends Component {
  componentDidMount() {}
  render() {
    const { auth } = this.props;

    return (
      <ul id="sidenav-left" className="sidenav sidenav-fixed">
        <li className="sidenav-close">
          <NavLink to="/events-readonly">
            <i className="material-icons left">event</i> Events
          </NavLink>
        </li>

        {auth && auth.uid ? null : (
          <Section>
            <li className="sidenav-close">
              <NavLink to="/signin">
                <i className="material-icons left">lock_open</i> Sign In
              </NavLink>
            </li>

            <li className="sidenav-close">
              <NavLink to="/signup">
                <i className="material-icons left">person_add</i> Sign Up
              </NavLink>
            </li>
          </Section>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(LeftSideNav);
