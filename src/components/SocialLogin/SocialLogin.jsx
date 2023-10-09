import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SocialLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-gray-900 antialiased">
            Continue With
          </h4>
          <div className="flex justify-between items-center gap-2 pt-3">
            <button
              onClick={() =>handleSocialLogin(googleLogin)}
              className="bg-blue-500 shadow-lg w-full py-4 rounded-lg"
            >
              <div className="flex items-center gap-2 justify-center text-2xl font-extrabold">
                <span className="bg-white p-1 rounded-sm">
                  <FcGoogle></FcGoogle>
                </span>
                <span>Google</span>
              </div>
            </button>
            <button className="bg-blue-500 shadow-lg w-full py-4 rounded-lg">
              <div className="flex items-center gap-2 justify-center text-2xl font-extrabold">
                <span className="bg-white p-1 rounded-sm text-blue-700">
                  <BsFacebook></BsFacebook>
                </span>
                <span>Facebook</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
