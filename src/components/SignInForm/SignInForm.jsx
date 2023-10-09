import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { successToast } from "../Toasts/SuccessToast";
import { errorToast } from "../Toasts/ErrorToast";

// import {
//   createUserWithEmailAndPassword,
//   fetchSignInMethodsForEmail,
// } from "firebase/auth";
// import { auth } from "../../FirebaseConfig/FirebaseConfig";

const SignInForm = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorclass, setErrorClass] = useState(
    "relative w-full min-w-[200px] hidden"
  );
  const [errorText, setErrorText] = useState(<></>);


  const setErrorDiv = () => {
    setErrorText(<h2>Invalid User Credentials!!!!</h2>);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign In");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setErrorClass("relative w-full min-w-[200px] hidden");
        successToast("Successfully Signed In!!")
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        // fetchSignInMethodsForEmail(auth, email)
        //   .then((result) => {
        //     console.log(result);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        // fetchSignInMethodsForEmail(auth, email)
        //   .then((result) => {console.log(result);})
        //   .catch((error) => {console.log(error)});

        // try {
        //   _firbaseAuth.createUserWithEmailAndPassword(
        //     email: 'foo@bar.com',
        //     password: 'password'
        //   );
        // } catch(signUpError) {
        //   if(signUpError is PlatformException) {
        //     if(signUpError.code == 'ERROR_EMAIL_ALREADY_IN_USE') {
        //       /// `foo@bar.com` has alread been registered.
        //     }
        //   }
        // }

        setErrorDiv();
        setErrorClass("relative w-full min-w-[200px] block");
        errorToast("Invalid User Credentials!!!");
      });
  };
  return (
    <div className="bg-white py-6 px-1 md:px-6 rounded-lg">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-gray-900 antialiased">
          Sign In
        </h4>
        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter your details to sign in.
        </p>
        <form
          onSubmit={handleSignIn}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                name="email"
                className="peer h-full w-full rounded-md border border-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
                placeholder=" "
                required
                type="email"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                name="password"
                type="password"
                className="peer h-full w-full rounded-md border border-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
                placeholder=" "
                required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                Password
              </label>
            </div>
            <div className={errorclass}>
              <h2 className="text-red-700">{errorText}</h2>
            </div>
          </div>
          <button
            className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Sign In
          </button>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Need an account? &nbsp;
            <Link
              to={"/signup"}
              className="font-medium text-pink-500 transition-colors hover:text-700"
              href="#"
            >
              Sign Up Now!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
