import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetail from './ServiceDetail';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const services = useLoaderData();

  useEffect(() => {
    const findService = services.find(
      (singleService) => singleService.event_id === parseInt(id)
    );
    setService(findService);
  }, [id, services]);

  return (
    <div className="max-w-screen-xl mx-auto py-6 pt-24 md:px-4 xl:px-0">
      <ServiceDetail service={service}></ServiceDetail>
    </div>
  );
};

export default ServiceDetails;
