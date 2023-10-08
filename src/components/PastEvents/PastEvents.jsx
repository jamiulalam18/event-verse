import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import PastEvent from "./PastEvent";

const PastEvents = () => {
    const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    fetch("past_events.json")
      .then((res) => res.json())
      .then((data) => setPastEvents(data));
  }, []);
    return (
        <div className="mt-12">
            <h2 className="text-center font-bold text-4xl pb-4">Our Past Events</h2>
            <div>
                <Marquee>
                {pastEvents.map((pastEvent) => (
                    <PastEvent key={pastEvent.past_event_id} pastEvent={pastEvent}></PastEvent>
                ))}
                </Marquee>
            </div>
        </div>
    );
};

export default PastEvents;