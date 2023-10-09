import { useLoaderData } from "react-router-dom";
import Member from "./Member";

const Members = () => {
    const members = useLoaderData();
    return (
        <div className="max-w-screen-xl mx-auto pt-12">
            <h1 className="text-5xl text-center font-bold text-white mb-4 pt-8 pb-2 border-b-2 border-white">Meet Our Awesome <br />Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
                {members.map(member => (
                    <Member key={member.employee_id} member={member}></Member>
                ))}
            </div>
        </div>
    );
};

export default Members;