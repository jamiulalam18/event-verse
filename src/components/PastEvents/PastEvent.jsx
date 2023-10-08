/* eslint-disable react/prop-types */
const PastEvent = ({ pastEvent }) => {
  const { event_name, location, img_url, year } = pastEvent;
  return (
    <div>
      <div className="w-96 glass mx-2">
        <figure>
          <img
            src={img_url}
            alt="Image"
          />
        </figure>
        <div className="">
          <h2 className="card-title">{event_name}</h2>
          <p>{location}, {year}</p>
        </div>
      </div>
    </div>
  );
};

export default PastEvent;
