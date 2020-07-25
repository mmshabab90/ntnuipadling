import React, { Component } from "react";
import EventList from "./EventList";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class Events extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="container">
        <div className="row">
          <EventList events={events} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
  };
};

export default compose(
  connect(mapStateToProps, {}),
  firestoreConnect([{ collection: "events" }])
)(Events);
