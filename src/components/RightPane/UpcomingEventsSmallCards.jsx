import { useEffect, useState } from "react";
import UpcomingEventsSmallCard from "./UpcomingEventsSmallCard";

const UpcomingEventsSmallCards = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetch("future_events.json")
      .then((res) => res.json())
      .then((data) => setUpcomingEvents(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-pink-600 pt-8 pb-2 border-b-2 border-pink-700">Upcoming Events</h1>
      <div className="flex flex-col gap-2 pt-4 pb-2">
      {upcomingEvents.slice(0,6).map((upcomingEvent) => (
        <UpcomingEventsSmallCard
          key={upcomingEvents.event_id}
          upcomingEvent={upcomingEvent}
        ></UpcomingEventsSmallCard>
      ))}
    </div>
    </div>
    
  );
};

export default UpcomingEventsSmallCards;
