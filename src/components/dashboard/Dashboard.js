import React, { Component } from "react";
import Notifications from "./Notifications";
import EventList from "../Events/EventList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class Dashboard extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    if (this.props.events !== []) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading === true) {
      return <Spinner />;
    }
    return (
      <div className="container dashboard">
        <div className="row">
          <div className="col s12 m8">
            <EventList events={this.props.events} />
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
    events: state.firestore.ordered.events,
  };
};

export default compose(
  firestoreConnect(() => ["events"]),
  connect(mapStateToProps)
)(Dashboard);
