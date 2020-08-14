import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/AuthActions";
import sidenavBg from "./assets/sidenavBg.png";

class RightSideNav extends Component {
  componentDidMount() {}

  render() {
    const { signOut, profile, auth } = this.props;
    return (
      <ul id="sidenav-right" className="sidenav">
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

        <li>
          <div className="divider" />
        </li>

        <li className="sidenav-close">
          <NavLink to="/dashboard">
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
          <NavLink to="/events">
            <i className="material-icons left">event</i> Events List
          </NavLink>
        </li>

        <li className="sidenav-close">
          <NavLink to="/addevents">
            <i className="material-icons left">event_note</i> Add Events
          </NavLink>
        </li>

        <li>
          <div className="divider" />
        </li>

        <li className="sidenav-close">
          <a href="/signin" onClick={signOut}>
            <i className="material-icons left">exit_to_app</i> Log Out
          </a>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()).then(this.history.pushState("/")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RightSideNav);
