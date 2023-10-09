import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="mt-12">
      <h2 className="text-center font-bold text-4xl pb-4">Testimonials</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-black shadow-xl rounded-lg items-center">
        <div className="col-span-1">
          <h2 className="px-4 text-2xl font-bold">
            Discover What Our Clients Have to Say About Their Experiences.
          </h2>
        </div>
        <div className="col-span-1 lg:col-span-3">
            <Marquee speed={25}>
                {testimonials.map((testimonial) => (
                    <Testimonial key={testimonial.id} testimonial={testimonial}></Testimonial>
                ))}
            </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
