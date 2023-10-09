/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceCard = ({ service }) => {
  const {
    event_name,
    img_url,
    short_description,
    price,
    event_id,
    our_services,
  } = service;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos='zoom-in'>
      <div className="card glass">
        <figure className="h-[300px]">
          <img className="w-full h-full" src={img_url} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl underline text-[#c1deda]">
            {event_name}
          </h2>
          <p>{short_description}</p>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mt-4">We Manage:</h2>
            <ul className="pl-10 text-xl">
              {our_services.map((service_task) => (
                <li className="list-disc" key={service_task}>
                  {service_task}
                </li>
              ))}
            </ul>
          </div>
          <h3 className="font-semibold text-2xl">
            Starting from: $<span className="font-bold">{price}</span>{" "}
          </h3>
          <div className="card-actions justify-end">
            <Link
              to={`/eventDetails/${event_id}`}
              className="btn btn-primary bg-[#17B098AA] hover:bg-[#17B098]"
            >
              Click for Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
