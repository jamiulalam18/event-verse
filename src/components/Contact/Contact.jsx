import ContactForm from "./ContactForm";
import OfficeInfo from "./OfficeInfo";

const Contact = () => {
    return (
        <div className="mt-12">
            <h2 className="text-center font-bold text-4xl pb-4">Contact Us</h2>
            <div className="grid grid-cols-2 gap-4">
                <OfficeInfo></OfficeInfo>
                <ContactForm></ContactForm>
            </div>
            
        </div>
    );
};

export default Contact;