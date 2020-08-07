import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    verifyPassword: "",
    error: false,
  };

  componentDidMount() {}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.verifyPassword) {
      console.log(this.state);
    }
  };
  render() {
    return (
      <div className="container center">
        <form className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              className="validate"
            />
          </div>

          <div className="input-field">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              className="validate"
            />
          </div>

          <div className="input-field">
            <label htmlFor="verifyPassword">Verify Password</label>
            <input
              type="password"
              id="verifyPassword"
              onChange={this.handleChange}
              className="validate"
            />
          </div>

          {this.state.password !== this.state.verifyPassword ? (
            <div className="input-field">
              <p className="red-text">
                Password and Verify Password values doesn't match
              </p>
            </div>
          ) : null}

          <div className="input-field">
            <button
              className="btn teal lighten-1 z-depth-3"
              onClick={this.handleSubmit}
            >
              Register
            </button>

            <div className="divider" />
            <div className="center">
              <p className="flow-text">OR</p>
            </div>
            <div className="divider" />

            <button className="btn blue lighten-1 z-depth-3">
              Signup with Facebook
            </button>
          </div>
        </form>
      </div>
    );
  }
}
