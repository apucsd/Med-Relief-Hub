import { Button } from "@/components/ui/button";
import { downLoadPNG } from "@/lib/downloadPNG";
import { useGetDonationQuery } from "@/redux/features/donation/donationApi";
import { useRef } from "react";
import Confetti from "react-confetti";
import { Link, useParams } from "react-router-dom";

const DonationSuccess = () => {
  const invoiceRef = useRef<HTMLDivElement>(null);
  const { transactionId } = useParams();
  const { data } = useGetDonationQuery(transactionId);
  const handleDownloadInvoice = () => {
    invoiceRef.current!.style.display = "block";
    if (invoiceRef.current) {
      downLoadPNG("invoice");
      invoiceRef.current.style.display = "none";
    }
  };

  return (
    <div className="bg-slate-100 container min-h-screen flex flex-col justify-center items-center">
      <div>
        <Confetti recycle={false} />
      </div>
      <div
        ref={invoiceRef}
        id="invoice"
        style={{ display: "none" }}
        className="bg-white rounded-lg shadow-lg px-8 py-10 my-10 w-full max-w-lg mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
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

          <div className="text-gray-700">
            <div className="font-bold text-xl mb-2">DONATION INVOICE</div>
            <div className="text-sm">
              Date: {new Date().getDate()}/{new Date().getMonth() + 1}/
              {new Date().getFullYear()}
            </div>
            <div className="text-sm">Invoice #: {transactionId}</div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 pb-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Invoice To:</h2>
          <div className="text-gray-700 mb-2">{data?.user?.name}</div>
          <div className="text-gray-700 mb-2">{data?.user?.address}</div>
          <div className="text-gray-700 mb-2">{data?.user?.number}</div>
          <div className="text-gray-700">{data?.user?.email}</div>
        </div>
        <table className="w-full text-end mb-8">
          <thead className="">
            <tr>
              <th className="text-gray-700 font-bold uppercase py-2">
                Description
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 text-gray-700">{data?.supply?.title}</td>
              <td className="py-4 text-gray-700">৳{data?.supply?.amount}</td>
            </tr>
          </tbody>
        </table>
        <hr className="my-2" />
        <div className="flex justify-end ">
          <div className="text-gray-700 mb-1">
            Subtotal: ৳{data?.supply?.amount}
          </div>
          <div className="text-gray-700">{}</div>
        </div>
        <div className="text-right flex justify-end mb-2">
          <div className="text-gray-700">Tax:</div>
          <div className="text-gray-700">৳0.00</div>
        </div>
        <hr className="my-2" />
        <div className="flex text-red-500  justify-end mb-8">
          <div className=" mr-2">Total:</div>
          <div className=" font-bold text-xl">৳{data?.supply?.amount}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img className="w-full h-full" src="/thanks.svg" alt="" />
        </div>
        <div className="bg-white p-6 px-10  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Donation Success!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for completing your donation.
            </p>
            <p className="text-gray-600 my-2">God will help you! 💖💖</p>
            <p> Have a great day!</p>
            <div className="py-10 text-center flex  gap-3 justify-center">
              <Link to="/">
                <Button variant="secondary">Back Home</Button>
              </Link>
              <Button onClick={handleDownloadInvoice}>Download Invoice</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccess;
