import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

/* eslint-disable react/prop-types */
const UpcomingEventsSmallCard = ({ upcomingEvent }) => {
  const { event_name, location, date } = upcomingEvent;
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div data-aos='slide-up' className="card glass bg-gray-950 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{event_name}</h2>
          {/* <p>{description}</p> */}
          <h3>{date}</h3>
          <h3>{location}</h3>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary bg-pink-600 hover:bg-pink-700">Get Tickets</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsSmallCard;
