/* eslint-disable react/prop-types */

const PartnerCard = ({partner}) => {
    const { name, img_url}=partner;
    return (
        <div className="w-32 mx-4">
            <div>
                <img className="w-32 h-32" src={img_url} alt={name}/>
                <h2 className="text-center">{name}</h2>
            </div>
        </div>
    );
};

export default PartnerCard;