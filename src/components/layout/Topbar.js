import React, { Component } from "react";
import Logo from "../../paddling-logo.png";
import { Link, NavLink } from "react-router-dom";
import M from "materialize-css";
import { connect } from "react-redux";
class Topbar extends Component {
  componentDidMount() {
    const elSidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elSidenav, { draggable: true });
    const elLeftSidenav = document.querySelectorAll("#sidenav-left");
    M.Sidenav.init(elLeftSidenav, { edge: "left" });
    const elRightSidenav = document.querySelectorAll("#sidenav-right");
    M.Sidenav.init(elRightSidenav, { edge: "right" });
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="navbar z-depth-3">
        <nav className="nav-wrapper cyan darken-3">
          <div className="row">
            <div className="col s12">
              <Link
                to="#"
                data-target="sidenav-left"
                className="left sidenav-trigger hide-on-medium-and-up"
              >
                <i className="material-icons">menu</i>
              </Link>
              <Link to="/" className="brand-logo center">
                <img alt="logo" src={Logo} />
              </Link>

              {auth.uid ? (
                <Link
                  to="#"
                  data-target="sidenav-right"
                  className="right sidenav-trigger show-on-medium-and-up"
                >
                  <i className="material-icons">menu</i>
                </Link>
              ) : null}

              <NavLink
                to="/"
                className="btn btn-floating teal lighten-1 right"
                style={{ marginTop: "10px" }}
              >
                MS
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Topbar);
