import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import { Select, DatePicker } from "react-materialize";

export class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      startTime: "",
      endTime: "",
      signedParticipants: 0,
      totalParticipants: 0,
      status: "",
      error: false,
      editable: false,
    };

    //refs
    this.date = React.createRef();
  }

  componentDidMount() {}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleEdit = () => {
    const { event } = this.props;
    this.setState({
      editable: !this.state.editable,
      name: event.name,
      date: event.date,
      startTime: event.start_time,
      endTime: event.end_time,
      signedParticipants: event.signed_participants,
      totalParticipants: event.total_participants,
      status: event.status,
    });
  };

  handleCancel = () => {
    this.setState({ editable: !this.state.editable });
  };

  handleSubmit = (e) => {
    const { event } = this.props;
    e.preventDefault();
    let editedData = {
      name: "",
      date: "",
      start_time: "",
      end_time: "",
      signed_participants: 0,
      total_participants: 0,
      status: "",
    };

    if (event.name !== this.state.name) {
      editedData.name = this.state.name;
    } else {
      editedData.name = event.name;
    }

    if (event.date !== this.state.date) {
      editedData.date = this.state.date;
    } else {
      editedData.date = event.date;
    }

    if (event.start_time !== this.state.startTime) {
      editedData.start_time = this.state.startTime;
    } else {
      editedData.start_time = event.start_time;
    }

    if (event.end_time !== this.state.endTime) {
      editedData.end_time = this.state.endTime;
    } else {
      editedData.end_time = event.end_time;
    }

    if (event.signed_participants !== this.state.signedParticipants) {
      editedData.signed_participants = this.state.signedParticipants;
    } else {
      editedData.signed_participants = event.signed_participants;
    }

    if (event.total_participants !== this.state.totalParticipants) {
      editedData.total_participants = this.state.totalParticipants;
    } else {
      editedData.total_participants = event.total_participants;
    }

    if (event.status !== this.state.status) {
      editedData.status = this.state.status;
    } else {
      editedData.status = event.status;
    }

    console.log(editedData);
  };

  render() {
    const { event } = this.props;
    const { editable } = this.state;

    if (event) {
      return (
        <div className="container section event-details">
          <div className="row center">
            <div className="col s10">
              <p className="flow-text">{event.name}</p>
            </div>
            <div className="col s2">
              <button className="btn teal" onClick={this.handleEdit}>
                <i className="material-icons left">edit</i>Edit
              </button>
            </div>
          </div>

          <div className="input-field left-align">
            <span className="grey-text">Event Name</span>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              defaultValue={event.name}
              disabled={editable === true ? false : true}
            />
          </div>

          <div className="input-field left-align">
            <span className="grey-text">Pick a date</span>

            <DatePicker
              defaultValue={event.date}
              id="date"
              disabled={editable === true ? false : true}
              options={{
                format: "mm/dd/yyyy",
              }}
              ref={this.date}
              onChange={(newDate) => {
                this.handleChange({
                  target: {
                    id: "date",
                    value: newDate,
                  },
                });
              }}
            />
          </div>

          <div className="input-field left-align">
            <span className="grey-text">Event Status</span>
            <Select
              value={event.status}
              disabled={editable === true ? false : true}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Select>
          </div>

          <button className="btn teal z-depth-2" onClick={this.handleSubmit}>
            Save
          </button>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const events = state.firestore.data.events;
  const event = events ? events[id] : null;
  return {
    event: event,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["events"])
)(EventDetails);
