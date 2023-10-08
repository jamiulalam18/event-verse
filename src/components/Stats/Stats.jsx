
const Stats = () => {
  return (
    <div className="py-8">
        <h2 className="text-center font-bold text-4xl pb-4">Organizing Events Worldwide</h2>
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-[#17B098] glass w-full">
        <div className="stat text-center text-black">
          <div className="stat-title text-black text-xl">Clients</div>
          <div className="stat-value">200+</div>
        </div>
        <div className="stat text-center text-black">
          <div className="stat-title text-black text-xl">Successful Events</div>
          <div className="stat-value">425+</div>
        </div>
        <div className="stat text-center text-black">
          <div className="stat-title text-black text-xl">Countries</div>
          <div className="stat-value">20+</div>
        </div>
        <div className="stat text-center text-black">
          <div className="stat-title text-black text-xl">Client Satisfaction</div>
          <div className="stat-value">90%</div>
        </div>

      </div>
    </div>
  );
};

export default Stats;
