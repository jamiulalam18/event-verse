import Contact from "../components/Contact/Contact";
import Navbar from "../components/Navbar/Navbar";

const ContactDetails = () => {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto pt-16">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default ContactDetails;
