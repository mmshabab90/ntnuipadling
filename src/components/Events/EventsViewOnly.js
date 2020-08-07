import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import EventList from "./EventList";

export class EventsViewOnly extends Component {
  render() {
    const { events, auth } = this.props;
    return (
      <div className="container">
        <div className="row">
          <EventList events={events} auth={auth} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.firestore.ordered.events,
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect(() => ["events"]),
  connect(mapStateToProps)
)(EventsViewOnly);
