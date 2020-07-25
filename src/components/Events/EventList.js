import React from "react";
import EventSummary from "./EventSummary";

const EventList = ({ events }) => {
  return (
    <div className="event-list section">
      <h4>Events</h4>

      <div className="row">
        {events &&
          events.map((event) => {
            return (
              <EventSummary event={event} key={event.id} />
            );
          })}
      </div>
    </div>
  );
};

export default EventList;
