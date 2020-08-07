import React, { Component } from "react";
import Error404Img from "../../Error404.png";

export class Error404 extends Component {
  render() {
    return (
      <div>
        <img src={Error404Img} alt="404 Error" style={{ width: "100%" }} />
      </div>
    );
  }
}

export default Error404;
