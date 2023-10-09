import Navbar from "../components/Navbar/Navbar";
import Members from './../components/Members/Members';

const TeamMembers = () => {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto pt-16">
        <Members></Members>
      </div>
    </div>
  );
};

export default TeamMembers;
