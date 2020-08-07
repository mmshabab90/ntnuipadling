import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/AuthActions";
import { Redirect } from "react-router-dom";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
    if (!this.props.authError) {
      return <Redirect to="/dashboard" />;
    }
  };

  render() {
    const { authError } = this.props;

    return (
      <div className="container center">
        <form className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button
              className="btn teal lighten-1 z-depth-3"
              onClick={this.handleSubmit}
            >
              Login
            </button>

            <div className="divider" style={{ marginTop: "15px" }} />
            <div className="center">
              <p className="flow-text">OR</p>
            </div>
            <div className="divider" />

            <button className="btn blue lighten-1 z-depth-3">
              Login with Facebook
            </button>
          </div>

          <div className="input-field red-text center">
            {authError ? (
              <blockquote className="flow-text">{authError}</blockquote>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
