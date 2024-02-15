import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="container  font-semibold relative mx-auto flex flex-col px-4 pb-4 lg:flex-row lg:items-center">
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
          <ul className="flex space-x-4 w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li>
              <Link
                className="group  transition-all duration-300 ease-in-out"
                to="/supplies"
              >
                <span className=" bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  All Supplies
                </span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <Button variant="secondary">Dashboard</Button>
              </Link>
            </li>
            <li>
              <div>
                <Button variant="secondary">Logout </Button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
