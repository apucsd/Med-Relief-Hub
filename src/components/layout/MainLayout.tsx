import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressAnimation from "../ui/ProgressAnimation";

const MainLayout = () => {
  return (
    <div>
      <ProgressAnimation />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
