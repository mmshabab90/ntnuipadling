import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
import { Select, Row, Col, Table } from "react-materialize";
import DatePick from "../UI/DatePick";
import TimePick from "../UI/TimePick";
import { editEvent } from "../../store/actions/EventActions";

export class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      editedDate: "",
      startTime: "",
      endTime: "",
      signedParticipants: 0,
      totalParticipants: 0,
      status: "",
      error: false,
      editable: false,
    };
  }

  componentDidMount() {}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleDate = (eDate) => {
    // console.log(eDate);
    const { event } = this.props;

    if (eDate) {
      this.setState({ editedDate: eDate });
    } else {
      this.setState({ editedDate: event.date });
    }
  };

  handleStartTime = (sTime) => {
    this.setState({ startTime: sTime });
  };

  handleEndTime = (eTime) => {
    this.setState({ endTime: eTime });
  };

  convertTime = (value) => {
    const d = new Date(value * 1000);
    const date = d.toDateString();
    const time = d.toLocaleTimeString();

    return {
      date: date,
      time: time,
    };
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
      id: this.props.match.params.id,
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

    if (this.state.editedDate === "") {
      editedData.date = this.state.date;
    } else {
      editedData.date = this.state.editedDate;
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

    // console.log(editedData);
    this.props.editEvent(editedData);
    this.setState({ editable: false });
  };

  render() {
    const { event } = this.props;
    const { editable } = this.state;

    if (event) {
      return (
        <div className="container section event-details">
          <Table>
            <tbody>
              <tr>
                <td className="flow-text center">{event.name}</td>
                <td>
                  <button className="btn teal" onClick={this.handleEdit}>
                    <i className="material-icons left">edit</i>Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>

          <div className="input-field left-align">
            <p className="grey-text">Event Name</p>

            {editable === false ? (
              <p className="grey-text">{event.name}</p>
            ) : (
              <input
                type="text"
                id="name"
                onChange={this.handleChange}
                defaultValue={event.name}
              />
            )}
          </div>

          <div className="input-field left-align">
            <p className="grey-text">Date</p>

            {editable === false ? (
              <p className="grey-text">{event.date}</p>
            ) : (
              <DatePick change={this.handleDate} defVal={event.date} />
            )}
          </div>

          <div className="input-field left-align">
            <p className="grey-text">Start Time</p>
            {editable === false ? (
              <p className="grey-text">{event.start_time}</p>
            ) : (
              <TimePick
                id="startTime"
                change={this.handleStartTime}
                defVal={event.start_time}
              />
            )}
          </div>

          <div className="input-field left-align">
            <p className="grey-text">End Time</p>

            {editable === false ? (
              <p className="grey-text">{event.end_time}</p>
            ) : (
              <TimePick
                id="endTime"
                change={this.handleEndTime}
                defVal={event.end_time}
              />
            )}
          </div>

          <div className="input-field left-align">
            <p className="grey-text">Total number of participants</p>

            {editable === false ? (
              <p className="grey-text">{event.total_participants}</p>
            ) : (
              <input
                type="text"
                id="totalParticipants"
                onChange={this.handleChange}
                defaultValue={event.total_participants}
              />
            )}
          </div>

          <div className="input-field left-align">
            <p className="grey-text">Event Status</p>

            {editable === false ? (
              <p className="grey-text">{event.status}</p>
            ) : (
              <Select value={event.status}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Select>
            )}
          </div>

          {editable === false ? null : (
            <div>
              <button
                className="btn red"
                onClick={() => this.setState({ editable: false })}
                style={{ marginRight: "15px" }}
              >
                <i className="material-icons left">clear</i> Cancel
              </button>

              <button
                className="btn teal z-depth-2"
                onClick={this.handleSubmit}
              >
                <i className="material-icons left">edit</i> Save
              </button>
            </div>
          )}

          <div className="card-panel hoverable">
            <Row>
              <Col s={6} className="left">
                <p className="grey-text">Created by:</p>
                <p className="grey-text">Username: {event.createdBy}</p>
                <p className="grey-text">Full Name: {event.authorName}</p>
              </Col>
              {event && event.created_at ? (
                <Col s={6} className="right">
                  <p className="grey-text">Created At:</p>
                  <blockquote className="grey-text">
                    Date: {this.convertTime(event.created_at.seconds).date}
                  </blockquote>
                  <blockquote className="grey-text">
                    Time: {this.convertTime(event.created_at.seconds).time}
                  </blockquote>
                </Col>
              ) : null}
            </Row>
          </div>
        </div>
      );
    } else {
      return <Spinner message="Loading data, please wait..." />;
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

const mapDispatchToProps = (dispatch) => {
  return {
    editEvent: (event) => dispatch(editEvent(event)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => ["events"])
)(EventDetails);
