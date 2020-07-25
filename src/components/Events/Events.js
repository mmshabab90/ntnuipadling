import React, { Component } from "react";
import EventList from "./EventList";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";

class Events extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <EventList events={this.props.events} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.firestore.ordered.events,
  };
};

export default compose(
  firestoreConnect(() => ["events"]),
  connect(mapStateToProps)
)(Events);
