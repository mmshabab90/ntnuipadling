import React from "react";

const EventSummary = ({ loggedIn, event }) => {
  return (
    <div className="col s12 m5 offset-m1 card z-depth-0 event-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="light-green lighten-4">
          <span className="card-title center green-text text-darken-4">
            {event.day}
          </span>
          <span className="card-title center green-text text-darken-4">
            {event.class}
          </span>
          <p className="center green-text text-darken-4">{event.date}</p>
        </div>

        <div style={{ marginTop: "15px" }}>
          <p>
            {event.startTime}-{event.endTime}
          </p>
          <p>
            Participants: {event.signedParticipants}/{event.totalParticipants}
          </p>
        </div>

        <div style={{ marginTop: "15px" }}>
          {loggedIn === true ? (
            <button className="btn z-depth-3 light-blue lighten-2">
              Attend
            </button>
          ) : (
            <p className="grey-text">Log in to attend</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
