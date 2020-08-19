import React, { Component } from "react";
import M from "materialize-css";

export class DatePick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
      format: "mm/dd/yyyy",
      formatMoment: "ddd D, MMM",
      date: "",
    };

    //refs
    this.date = React.createRef();
  }

  componentDidMount() {
    let context = this;

    let elemsDatePicker = document.querySelectorAll(".datepicker");

    M.Datepicker.init(elemsDatePicker, {
      format: "dd/mm/yyyy",
      onClose: context.handleDate,
    });
  }

  handleDate = () => {
    this.setState({
      date: this.date.current.value,
    });

    this.props.change(this.state.date);
  };

  render() {
    return (
      <input
        type="text"
        id="date"
        className="datepicker"
        ref={this.date}
        onChange={this.handleDate}
      />
    );
  }
}

export default DatePick;
