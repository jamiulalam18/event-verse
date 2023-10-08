import Rating from "react-rating";
import {AiTwotoneStar, AiOutlineStar} from "react-icons/ai";

/* eslint-disable react/prop-types */
const Testimonial = ({ testimonial }) => {
  const { client_name, img_url, review_description, stars } = testimonial;
  return (
    <div className="carousel-item">
      <div className="card w-96 h-full bg-black glass shadow-xl mx-2">
        <figure className="px-10 pt-10">
          <img src={img_url} alt="Img" className="rounded-full w-16" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{client_name}</h2>
          <p>{review_description}</p>
          <Rating
            placeholderRating={stars}
            emptySymbol={
                <AiOutlineStar></AiOutlineStar>
            }
            placeholderSymbol={
                <AiTwotoneStar></AiTwotoneStar>
            }
            fullSymbol={
                <AiTwotoneStar></AiTwotoneStar>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
