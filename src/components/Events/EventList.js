import React from "react";
import EventSummary from "./EventSummary";

const EventList = ({ events, auth }) => {
  return (
    <div className="event-list section">
      <h4>Events</h4>

      <div className="row">
        {events &&
          events.map((event) => {
            return (
              <EventSummary
                event={event}
                key={event.id}
                location={"/event/" + event.id}
                auth={auth}
              />
            );
          })}
      </div>
    </div>
  );
};

export default EventList;
