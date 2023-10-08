import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import PartnerCard from "./PartnerCard";
const Partners = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('partners.json')
            .then(res => res.json())
            .then(data => setPartners(data));
    }, [])
    return (
        <div className="py-8">
        <h2 className="text-center font-bold text-4xl pb-4">Trusted Partners</h2>
        <Marquee>
            {partners.map((partner) => (
                <PartnerCard key={partner.partner_id} partner={partner}></PartnerCard>
            ))}
        </Marquee>
        </div>
    );
};

export default Partners;