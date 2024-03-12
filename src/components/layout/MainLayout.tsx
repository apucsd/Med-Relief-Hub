import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { useAppSelector } from "@/redux/hook";

const MainLayout = () => {
  const { mode } = useAppSelector((state) => state.theme);
  return (
    <div>
      <div
        className={`${
          mode === "light"
            ? "bg-white"
            : "bg-black text-white transition-all duration-1000"
        }`}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
