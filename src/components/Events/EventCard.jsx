import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const EventCard = ({event}) => {
    const {event_name, img_url, short_description, price, event_id} = event;
    const [fadeClass, setFadeClass] = useState('slide-left');
    
    useEffect(() => {
      AOS.init();
    }, [])

    useEffect(() => {
      if(parseInt(event_id)%2===0){
        setFadeClass('zoom-in');
      }else{
        setFadeClass('zoom-in')
      }
    }, [event_id])
  return (
    <div>
      <div data-aos={fadeClass} className="card glass h-[500px]">
        <figure className="h-[250px]">
          <img
            className="w-full h-full"
            src={img_url}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{event_name}</h2>
          <p>{short_description}</p>
          <h3 className="font-semibold">
            Starting from: $<span className="font-bold">{price}</span>{" "}
          </h3>
          <div className="card-actions justify-end">
            <Link to={`/eventDetails/${event_id}`} className="btn btn-primary bg-[#17B098AA] hover:bg-[#17B098]">Click for Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
