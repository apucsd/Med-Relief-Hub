import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DonationFail = () => {
  return (
    <div className="bg-slate-100  h-screen flex flex-col justify-center items-center">
      <div className="grid md:grid-cols-2">
        <div>
          <img className="w-full h-full" src="/public/fail.svg" alt="" />
        </div>
        <div className="bg-white p-6 px-10  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-white w-16 rounded-full pt-3 bg-red-600 h-16 mx-auto my-6"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="currentColor"
              font-size="24"
              font-family="Arial"
              font-weight="bold"
            >
              ?
            </text>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Donation Failed!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for try your donation.
            </p>
            <p className="text-gray-600 my-2">Try Again</p>

            <div className="py-10 text-center flex  gap-3 justify-center">
              <Link to="/">
                <Button variant="secondary">Back Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationFail;
