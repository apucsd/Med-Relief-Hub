import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Gallery from "./Gallery";
import SupplyCardList from "./SupplyCardList";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <SupplyCardList />
      <Testimonial />
      <AboutUs />
      <Gallery />
    </div>
  );
};

export default Home;
