import Navbar from "../components/Navbar/Navbar";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import SocialLogin from "../components/SocialLogin/SocialLogin";

const SignUpPage = () => {
    return (
        <div className="bg-black min-h-screen">
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto pt-28 flex flex-col items-center gap-3 justify-center">
                <SocialLogin></SocialLogin>
                <SignUpForm></SignUpForm>
            </div>
        </div>
    );
};

export default SignUpPage;