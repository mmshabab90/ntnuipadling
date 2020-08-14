import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Section } from "react-materialize";
import sidenavBg from "./assets/sidenavBg.png";

class LeftSideNav extends Component {
  componentDidMount() {}
  render() {
    const { auth, profile } = this.props;

    return (
      <ul id="sidenav-left" className="sidenav sidenav-fixed">
        {auth && auth.uid ? (
          <li>
            <div className="user-view">
              <div className="background bg-rightsidenav">
                <img
                  src={sidenavBg}
                  alt="sidenav-bg"
                  style={{ height: "250px", width: "100%" }}
                />
              </div>

              <Link to="/user-view">
                <div className="center" style={{ paddingLeft: "40%" }}>
                  <img alt="avatar" className="circle" src={profile.imageUrl} />
                </div>
              </Link>
              <Link
                to="/user-view"
                className="black-text username"
                style={{ fontWeight: "bolder" }}
              >
                {profile.userName}
              </Link>
              <Link
                to="/user-view"
                className="black-text email"
                style={{ fontWeight: "bolder" }}
              >
                {auth.email}
              </Link>
            </div>
          </li>
        ) : null}

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
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(LeftSideNav);
