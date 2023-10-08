import { useEffect, useState } from "react";
import EventCards from "./EventCards";
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventsContainer = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="border-2 border-[#17B098] px-2 pb-2 mt-6 rounded-lg">
            <h1 className="text-3xl text-center font-bold text-[#17B098] mb-4 pt-8 pb-2 border-b-2 border-[#17B098]">Events We Organize</h1>

            <EventCards events={events}></EventCards>
        </div>
    );
};

export default EventsContainer;