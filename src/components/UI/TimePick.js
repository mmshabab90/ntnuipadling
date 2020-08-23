import React, { Component } from "react";
import M from "materialize-css";

export class TimePick extends Component {
  componentDidMount() {
    const elemsTimePicker = document.querySelectorAll(".timepicker");

    M.Timepicker.init(elemsTimePicker, {
      defaultTime: "now",
      twelveHour: false,
      format: "HH:MM:SS",
    });
  }

  handleChange = (e) => {
    this.props.change(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        id={this.props.id}
        className="timepicker"
        onSelect={this.handleChange}
        defaultValue={this.props.defVal}
      />
    );
  }
}

export default TimePick;
