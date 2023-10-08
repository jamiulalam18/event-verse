import RightPaneContainer from "../RightPane/RightPaneContainer";
import HomeItems from "./HomeItems";
import Stats from './../Stats/Stats';
import Partners from './../Partners/Partners';
import Testimonials from "../Testimonials/Testimonials";
import PastEvents from "../PastEvents/PastEvents";
import Contact from "../Contact/Contact";

const HomeContents = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto">
      <Stats></Stats>
      <Partners></Partners>

        <div className="grid grid-cols-4 gap-6">
            <div  className="col-span-3">
                <HomeItems />
            </div>
            <div className="col-span-1">
                <RightPaneContainer />
            </div>
        </div>
        <PastEvents></PastEvents>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default HomeContents;
