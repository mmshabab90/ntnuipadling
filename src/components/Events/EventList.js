import React, { Component } from "react";
import EventSummary from "./EventSummary";

export class EventList extends Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {
    const { events } = this.props;

    if (events && events !== []) {
      this.setState({ loggedIn: true });
    }
  }
  render() {
    const { events } = this.props;
    const { loggedIn } = this.state;

    return (
      <div className="event-list section">
        <h4>Events</h4>

        <div className="row">
          {loggedIn === true && events
            ? events.map((event) => {
                return (
                  <EventSummary
                    event={event}
                    key={event.id}
                    loggedIn={loggedIn}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default EventList;
