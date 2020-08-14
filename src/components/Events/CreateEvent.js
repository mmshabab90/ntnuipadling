import React, { Component } from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import { createEvent } from "../../store/actions/EventActions";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      startTime: "",
      endTime: "",
      totalParticipants: 0,
      status: "",
      error: false,
    };

    //refs
    this.date = React.createRef();
  }

  componentDidMount() {
    let context = this;
    const elemsDatePicker = document.querySelectorAll(".datepicker");
    const elemsTimePicker = document.querySelectorAll(".timepicker");
    const elemsSelect = document.querySelectorAll("select");

    M.Datepicker.init(elemsDatePicker, {
      format: "mm/dd/yyyy",
      onClose: context.handleDate,
    });

    M.Timepicker.init(elemsTimePicker, {
      defaultTime: "now",
      twelveHour: false,
      format: "HH:MM:SS",
    });

    M.FormSelect.init(elemsSelect, {});
  }

  handleDate = () => {
    this.setState({
      date: this.date.current.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      date,
      startTime,
      endTime,
      totalParticipants,
      status,
    } = this.state;

    if (
      name === "" ||
      date === "" ||
      startTime === "" ||
      endTime === "" ||
      totalParticipants === "" ||
      status === ""
    ) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });

      const data = {
        name: name,
        date: date,
        start_time: startTime,
        end_time: endTime,
        total_participants: totalParticipants,
        status: status,
      };
      this.props.createEvent(data);
      this.props.history.push("/events");
    }
  };

  handleCancel = () => {
    this.setState({
      name: "",
      date: "",
      startTime: "",
      endTime: "",
      totalParticipants: 0,
      status: "",
    });

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container center">
        <h5 className="grey-text text-darken-3">Create an event</h5>
        <form className="white">
          <div className="input-field">
            <label htmlFor="name">Event Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="date">Pick a date</label>
            <input
              type="text"
              id="date"
              className="datepicker"
              ref={this.date}
              onChange={this.handleDate}
            />
          </div>

          <div className="input-field">
            <label htmlFor="startTime">Pick Start Time</label>
            <input
              type="text"
              id="startTime"
              className="timepicker"
              onSelect={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor=" endTime">Pick End Time</label>
            <input
              type="text"
              id="endTime"
              className="timepicker"
              onSelect={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="totalParticipants">
              Total number of participants
            </label>
            <input
              type="text"
              id="totalParticipants"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field center">
            <select
              id="status"
              onChange={this.handleChange}
              defaultValue={this.state.status}
            >
              <option value="" disabled defaultValue>
                Choose a status
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {this.state.error === true ? (
            <blockquote className="red-text">
              All the fields are required! Please complete the form.
            </blockquote>
          ) : null}

          <div className="input-field row">
            <div className=" col s6">
              <button className="btn red z-depth-3" onClick={this.handleCancel}>
                <i className="material-icons left">clear</i> Cancel
              </button>
            </div>

            <div className=" col s6">
              <button
                className="btn teal z-depth-3"
                onClick={this.handleSubmit}
              >
                <i className="material-icons left">add</i> Add Event
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event)),
  };
};

export default connect(null, mapDispatchToProps)(CreateEvent);
