import React, { Component } from "react";

export default class SignIn extends Component {
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
    console.log(this.state);
  };

  render() {
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

            <div className="divider" />
            <div className="center">
              <p className="flow-text">OR</p>
            </div>
            <div className="divider" />

            <button className="btn blue lighten-1 z-depth-3">
              Login with Facebook
            </button>
          </div>
        </form>
      </div>
    );
  }
}
