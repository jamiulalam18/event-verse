import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesContainer = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="max-w-screen-xl mx-auto pt-20">
            <h1 className="text-5xl text-center font-bold text-white mb-4 pt-8 pb-2 border-b-2 border-white">Our Services</h1>
            <div className="grid grid-cols-2 gap-4">
                {services.map(service => (
                    <ServiceCard key={service.event_id} service={service}></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default ServicesContainer;