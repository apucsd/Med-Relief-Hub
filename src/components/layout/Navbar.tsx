import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hook";

import Sidebar from "./Sidebar";

import SelectTheme from "../SelectTheme";
import { Dropdown, MenuProps } from "antd";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          className="group  font-semibold uppercase transition-all duration-300 ease-in-out"
          to="/about-us"
        >
          <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About Us
          </span>
        </Link>
      ),
    },

    {
      key: "2",
      label: (
        <Link
          className="group uppercase font-semibold transition-all duration-300 ease-in-out"
          to="/leaderboard"
        >
          <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Leaderboard
          </span>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          className="group  font-semibold uppercase transition-all duration-300 ease-in-out"
          to="/volunteer"
        >
          <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Volunteer
          </span>
        </Link>
      ),
    },
  ];
  return (
    <header className="container text-center font-semibold relative mx-auto flex flex-col px-4 py-4 lg:flex-row lg:items-center">
      <Link
        to="/"
        className="flex ms-4 items-center whitespace-nowrap text-2xl font-black"
      >
        <span className="flex gap-1 justify-center items-center bold">
          <img src="logo.svg" alt="" />
          MedReliefHub
        </span>
      </Link>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          color="#FF6154"
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
      >
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <ul className="flex uppercase text-center lg:space-x-4 w-full  flex-col items-center justify-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li>
              <Link
                className="group  transition-all duration-300 ease-in-out"
                to="/"
              >
                <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="group  transition-all duration-300 ease-in-out"
                to="/supplies"
              >
                <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  All Supplies
                </span>
              </Link>
            </li>

            <li>
              <Link
                className="group  transition-all duration-300 ease-in-out"
                to="/community"
              >
                <span className=" bg-left-bottom pb-2 bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
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
              {user ? (
                <div title={user.email}>
                  <Sidebar />
                </div>
              ) : (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </li>
            <li>
              <SelectTheme />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
