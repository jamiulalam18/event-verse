/* eslint-disable react/prop-types */
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Member = ({ member }) => {
  const { designation, name, img_url } = member;
  return (
    <div>
      <div className="relative flex flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-gray-200 bg-clip-border text-gray-700 flex justify-center">
          <img
            className="h-full w-52 rounded-full"
            src={img_url}
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            {designation}
          </p>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2">
          
            <BsFacebook></BsFacebook>
            <BsTwitter></BsTwitter>
            <BsInstagram></BsInstagram>
          
        </div>
      </div>
    </div>
  );
};

export default Member;
