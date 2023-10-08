import Slider from "../components/Hero/Slider";
import HomeContents from "../components/HomeContents/HomeContents";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <HomeContents></HomeContents>
            
        </div>
    );
};

export default Home;