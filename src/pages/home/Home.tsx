import ScrollToTop from "@/components/ScrollToTop";
import ContactUs from "../contact/ContactUs";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Gallery from "./Gallery";
import States from "./States";
import SupplyCardList from "./SupplyCardList";
import Testimonial from "./Testimonial";
import ProgressAnimation from "@/components/ui/ProgressAnimation";

const Home = () => {
  return (
    <div>
      <ProgressAnimation />
      <Banner />
      <SupplyCardList />
      <Gallery />
      <AboutUs />
      <Testimonial />
      <States />

      <ContactUs />
      <ScrollToTop />
    </div>
  );
};

export default Home;
