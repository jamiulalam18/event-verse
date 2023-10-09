import Navbar from "../components/Navbar/Navbar";
import SignInForm from "../components/SignInForm/SignInForm";
import SocialLogin from "../components/SocialLogin/SocialLogin";

const SignInPage = () => {
    return (
        <div className="bg-black min-h-screen">
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto pt-28 flex flex-col items-center gap-3 justify-center">
                <SocialLogin></SocialLogin>
                <SignInForm></SignInForm>
            </div>
        </div>
    );
};

export default SignInPage;