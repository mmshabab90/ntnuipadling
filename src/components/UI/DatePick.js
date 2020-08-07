import React, { Component } from "react";
import M from "materialize-css";

export class DatePick extends Component {
  constructor(props) {
    super(props);

    //refs
    this.date = React.createRef();
  }

  componentDidMount() {
    let context = this.props;
    const elemsDatePicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elemsDatePicker, {
      format: "mm/dd/yyyy",
      onClose: context.handleDate,
    });
  }
  render() {
    return (
      <div className="input-field">
        <span className="grey-text">Pick a date</span>
        <input
          type="text"
          id="date"
          className="datepicker"
          ref={this.date}
          onChange={this.props.handleDate}
        />
      </div>
    );
  }
}

export default DatePick;
