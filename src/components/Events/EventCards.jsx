/* eslint-disable react/prop-types */
import EventCard from "./EventCard";

const EventCards = ({ events }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {events.map((event) => (
          <EventCard key={event.event_id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default EventCards;
