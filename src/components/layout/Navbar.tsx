import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/redux/hook";

import { Dropdown, MenuProps } from "antd";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SelectTheme from "../SelectTheme";
import Sidebar from "./Sidebar";
import { Button } from "../ui/button";
import { logoutUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { Modal } from "antd";
const { confirm } = Modal;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  // const { mode } = useAppSelector((state) => state.theme);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          className="group uppercase font-semibold transition-all duration-300 ease-in-out"
          to="/leaderboard"
        >
          <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Leaderboard
          </span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          className="group  font-semibold uppercase transition-all duration-300 ease-in-out"
          to="/volunteer"
        >
          <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Volunteer
          </span>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          className="group  font-semibold uppercase transition-all duration-300 ease-in-out"
          to="/contact-us"
        >
          <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact Us
          </span>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          className="group  font-semibold uppercase transition-all duration-300 ease-in-out"
          to="/about-us"
        >
          <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About Us
          </span>
        </Link>
      ),
    },
  ];
  const navigationMenu = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "All Supplies",
      link: "/supplies",
    },
    {
      text: "Community",
      link: "/community",
    },
    {
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      text: "Profile",
      link: "/profile",
    },

    {
      text: "Contact Us",
      link: "/contact-us",
    },
    {
      text: "About Us",
      link: "/about-us",
    },
  ];

  const dispatch = useAppDispatch();
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure logout this?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(logoutUser());
        toast.success("Logout successful", { duration: 1000 });
      },
    });
  };
  return (
    <nav className="h-full w-full container">
      <div className="flex justify-between items-center">
        <div className=" relative">
          <Link
            to="/"
            className="flex ms-4 items-center whitespace-nowrap text-2xl font-black"
          >
            <span className="flex gap-1 justify-center items-center bold">
              <img src="/public/logo.svg" alt="" />
              MedReliefHub
            </span>
          </Link>
        </div>

        {/* all links for md */}

        <div className="hidden my-4 md:flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <ul className="flex uppercase z-[9999] text-center lg:space-x-4 w-full  flex-col items-center justify-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li>
              <Link
                className="group  transition-all duration-300 ease-in-out"
                to="/"
              >
                <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="group  transition-all duration-300 ease-in-out"
                to="/supplies"
              >
                <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  All Supplies
                </span>
              </Link>
            </li>

            <li>
              <Link
                className="group  transition-all duration-300 ease-in-out"
                to="/community"
              >
                <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Community
                </span>
              </Link>
            </li>
            <li>
              <Dropdown
                overlayStyle={{
                  width: "200px",
                  textAlign: "center",
                }}
                menu={{ items }}
                placement="bottom"
                arrow
              >
                <div className="hover:cursor-pointer flex items-center">
                  More
                  <span>
                    <ChevronDown className="size-5" />
                  </span>
                </div>
              </Dropdown>
            </li>
            <li>
              <SelectTheme />
            </li>
            <li>
              {user ? (
                <div title={user.email}>
                  <Sidebar />
                </div>
              ) : (
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="rounded-lg px-8 text-gray-800 font-semibold  uppercase"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* all links for md */}
        {/* sidebar hamburger */}
        <div
          onClick={() => setOpen(!open)}
          className="relative md:hidden hover:cursor-pointer flex flex-col gap-1 transition-all duration-300 "
        >
          <div className="flex flex-col group justify-between gap-1">
            <div className="h-0.5 bg-gray-700 w-6 "></div>
            <div className="h-0.5 bg-gray-700 w-5 group-hover:w-6 transition-all duration-300"></div>
            <div className="h-0.5 bg-gray-700 w-3 group-hover:w-6 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.4,
                delayChildren: 0.2,
              }}
              className="fixed md:hidden z-[99999] overflow-y-scroll bg-secondary text-white shadow-lg top-0 right-0 w-full max-w-[280px] h-screen p-5"
            >
              <button
                onClick={() => setOpen(!open)}
                className="bg-white hover:cursor-pointer text-gray-700 text-lg h-8 w-8 block  rounded-full"
              >
                &times;
              </button>
              <div>
                {/* all link */}
                <hr className="my-4" />
                <motion.ul className="flex uppercase flex-col items-center  h-screen gap-10 justify-start">
                  {navigationMenu.map((menu, i) => (
                    <Link key={i} to={menu.link} onClick={() => setOpen(!open)}>
                      {menu.text}
                    </Link>
                  ))}
                  <li className="">
                    {user ? (
                      <Button
                        onClick={() => {
                          setOpen(!open);
                          showDeleteConfirm();
                        }}
                      >
                        LogOut
                      </Button>
                    ) : (
                      <Link
                        onClick={() => {
                          setOpen(!open);
                        }}
                        to="/login"
                      >
                        <Button
                          variant="outline"
                          className="rounded-lg px-8 text-gray-800 font-semibold  uppercase"
                        >
                          Login
                        </Button>
                      </Link>
                    )}
                  </li>
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
{
  /*  */
}
