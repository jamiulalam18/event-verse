import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceDetail = ({ service }) => {
  const {
    event_name,
    img_url,
    price,
    our_services,
    long_description,
  } = service;
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate("/contact");
  };
  return (
    <div className="">
      <div className="relative ">
        <img className="h-[600px] w-full rounded-lg" src={img_url} alt={event_name} />
        <div className="rounded-b-lg bg-gray-600 bg-opacity-80 w-full p-6 absolute bottom-0">
          <button className="p-2 rounded-lg text-white text-3xl  hover:cursor-default font-semibold opacity-100">
            Starting From ${price}
          </button>
          <br />
          <button
            onClick={() => handleGetQuote()}
            className="p-2 mt-3 rounded-lg text-white text-3xl bg-[#17B098] hover:bg-[#17B098] hover:cursor-pointer font-semibold bg-opacity-100"
          >
            Get A Quote
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold mt-10 mb-6">{event_name}</h2>
      <p className="text-justify">{long_description}</p>
      <h2 className="text-2xl font-bold mt-4">We Manage:</h2>
      <ul className="pl-10 text-xl">
        {our_services?.map((service_task) => (
          <li className="list-disc" key={service_task}>
            {service_task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetail;
