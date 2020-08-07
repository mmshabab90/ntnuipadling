import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventSummary extends Component {
  state = {
    signedParticipants: 0,
    blockAdd: false,
  };

  handleClick = () => {
    const { event } = this.props;
    // const { signedParticipants } = this.state;

    if (event.signed_participants <= event.total_participants) {
      this.setState((prev) => ({
        signedParticipants: prev.signedParticipants + 1,
      }));
    } else {
      this.setState({ blockAdd: true });
    }
  };

  render() {
    const { event, location, auth } = this.props;
    const { signedParticipants, blockAdd } = this.state;

    return (
      <div className="col s12 m5 offset-m1 card z-depth-0 event-summary">
        <div className="card-content grey-text text-darken-3">
          <div className="light-green lighten-4">
            <span className="card-title center green-text text-darken-4">
              {event.day}
            </span>
            <span className="card-title center green-text text-darken-4">
              {event.name}
            </span>
            {event.status === "Active" ? (
              <span className="card-title center green-text text-darken-4">
                {event.status}
              </span>
            ) : (
              <span className="card-title center red-text text-darken-4">
                {event.status}
              </span>
            )}
            <p className="center green-text text-darken-4">{event.date}</p>
          </div>

          <div style={{ marginTop: "15px" }}>
            <p>
              {event.start_time}-{event.end_time}
            </p>
            <p>
              Participants: {event.signed_participants || signedParticipants}/
              {event.total_participants}
            </p>
          </div>

          {auth && auth.uid ? (
            <div className="row" style={{ marginTop: "15px" }}>
              <div className="col s6">
                {event.status === "Active" ? (
                  <button
                    className="btn z-depth-3 light-blue lighten-2"
                    onClick={this.handleClick}
                    disabled={blockAdd === true ? true : false}
                  >
                    Attend
                  </button>
                ) : (
                  <p className="grey-text">Event Inactive</p>
                )}
              </div>

              <div className="col s6">
                <Link className="btn z-depth-1 teal lighten-2" to={location}>
                  Edit
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
