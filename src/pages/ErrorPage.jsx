import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-black min-h-screen">
      <Navbar></Navbar>
      <div className="flex flex-col items-center pt-32  justify-center">
        <h2 className="text-4xl font-bold text-red-800">Oops!!!!</h2>
        <h2 className="text-2xl font-bold text-red-800">
          Page you are looking for does not exist.
        </h2>
        <div className="mt-8 flex gap-6">
          <button
            className="bg-pink-800 hover:bg-pink-900 text-white text-2xl font-semibold p-4 rounded-xl"
            onClick={handleGoBack}
          >
            Go Back
          </button>
          <Link to={"/"}>
            <button className="bg-pink-800 hover:bg-pink-900 text-white text-2xl font-semibold p-4 rounded-xl">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
