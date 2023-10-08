import {FaLocationDot} from "react-icons/fa6"
import {AiOutlinePhone, AiOutlineClockCircle} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
const OfficeInfo = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2 mt-4 h-full">
                <div className="glass px-6 py-8 rounded-lg bg-gray-300 text-black">
                    <h2 className="text-4xl mb-2 text-pink-700"><FaLocationDot></FaLocationDot></h2>
                    <h2 className="text-2xl font-bold mb-3">Address</h2>
                    <p>234 King st S <br></br> New York, NY 535022 </p>
                </div>
                <div className="glass px-6 py-8 rounded-lg bg-gray-300 text-black">
                    <h2 className="text-4xl mb-2 text-pink-700"><AiOutlinePhone></AiOutlinePhone></h2>
                    <h2 className="text-2xl font-bold mb-3">Call Us</h2>
                    <p>+1 345 532 3434<br></br>+1 854 545 4542</p>
                </div>
                <div className="glass px-6 py-8 rounded-lg bg-gray-300 text-black">
                    <h2 className="text-4xl mb-2 text-pink-700"><HiOutlineMail></HiOutlineMail></h2>
                    <h2 className="text-2xl font-bold mb-3">Email</h2>
                    <p>info@eventverse.com<br></br>contact@eventverse.com</p>
                </div>
                <div className="glass px-6 py-8 rounded-lg bg-gray-300 text-black">
                    <h2 className="text-4xl mb-2 text-pink-700"><AiOutlineClockCircle></AiOutlineClockCircle></h2>
                    <h2 className="text-2xl font-bold mb-3">Office Hours</h2>
                    <p>Monday - Friday<br></br>9:00AM - 05:00PM</p>
                </div>

            </div>
        </div>
    );
};

export default OfficeInfo;