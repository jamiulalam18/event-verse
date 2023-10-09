import React from "react";
import banner1 from "./../../../public/banner-1.png";
import banner2 from "./../../../public/banner-2.png";
import banner3 from "./../../../public/banner-3.png";
import { useNavigate } from "react-router-dom";

const banners = [banner1, banner2, banner3];
// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;
const Slider = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const navigate = useNavigate();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  function handleGetQuote() {
    navigate("/contact");
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow relative">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {banners.map((banner, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${banner})` }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-80">
        <div className="card lg:card-side shadow-xl">
          <figure>
            <img className="hidden md:block" src="/logo-2.png" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">
              Welcome to the Epitome of Entertainment Events
            </h2>
            <p className="text-xl">
              From Concept to Curtain Call, We Make Dreams Reality.
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={handleGetQuote}
                className="font-bold text-2xl btn btn-primary bg-[#17B098AA] hover:bg-[#17B098]"
              >
                Get A Quote...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
