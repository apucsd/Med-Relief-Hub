import AboutUs from "./AboutUs";
import Banner from "./Banner";
import EmergencyContacts from "./EmergencyContacts";
import Gallery from "./Gallery";
import States from "./States";
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
      <States />
      <EmergencyContacts />
    </div>
  );
};

export default Home;
