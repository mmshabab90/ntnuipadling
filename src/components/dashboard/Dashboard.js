import React, { Component } from "react";
import Notifications from "./Notifications";
import EventList from "../Events/EventList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Dashboard extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="container dashboard">
        <div className="row">
          <div className="col s12 m8">
            <EventList events={events} />
          </div>
          <div className="col s12 m3 offset-m1">
            <Notifications />
          </div>
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
)(Dashboard);
