import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import M from "materialize-css";
import { signUp } from "../../store/actions/AuthActions";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    verifyPassword: "",
    image: "",
    imageUrl: "",
    progress: 0,
    error: false,
  };

  componentDidMount() {
    const elTooltip = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elTooltip, { position: "bottom" });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    // console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      imageUrl: this.state.imageUrl,
      email: this.state.email,
      password: this.state.password,
    };

    if (this.state.password === this.state.verifyPassword) {
      this.props.signUp(newUser);
      // console.log(newUser);
    }
  };

  handleUploadStart = () => {
    this.setState({ progress: 0 });
  };

  handleUploadSuccess = (filename) => {
    this.setState({ image: filename, progress: 100 });
    firebase
      .storage()
      .ref("avatars")
      .child(filename)
      .getDownloadURL()
      .then((url) =>
        this.setState({
          imageUrl: url,
        })
      );
  };

  render() {
    const { auth } = this.props;
    const { error } = this.state;

    if (auth.uid) return <Redirect to="/dashboard" />;

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
            <label htmlFor="password">Password (Min 8 Characters Long)</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              className="validate tooltipped"
              data-position="bottom"
              data-tooltip="Password must be minimum 8 characters long"
            />
            {error ? (
              <blockquote className="red-text">
                Password much be greater than 6 characters long
              </blockquote>
            ) : null}
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
            <label>Upload Image</label>
            <FileUploader
              accept="image/*"
              id="uploadImage"
              name="uploadImage"
              style={{ paddingTop: "20px", cursor: "pointer" }}
              storageRef={firebase.storage().ref("avatars")}
              onUploadStart={this.handleUploadStart}
              onUploadSuccess={this.handleUploadSuccess}
            />
          </div>

          <div className="input-field" style={{ paddingTop: "25px" }}>
            <button
              className="btn teal lighten-1 z-depth-3"
              onClick={this.handleSubmit}
            >
              Register
            </button>

            <div
              className="divider"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            />

            <div className="center">
              <p className="flow-text">OR</p>
            </div>

            <div
              className="divider"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            />

            <button className="btn blue lighten-1 z-depth-3">
              Signup with Facebook
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
