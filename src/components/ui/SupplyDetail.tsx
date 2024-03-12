import { useGetSingleSupplyQuery } from "@/redux/features/supply/supplyApi";
import { TSupply } from "@/types/type";
import { useParams } from "react-router-dom";
import { Button } from "./button";
import { toast } from "sonner";
import Loading from "./Loading";
import DonateAmountCard from "./DonateAmountCard";
import { useState } from "react";
import { HeartCrack } from "lucide-react";
import { useAppSelector } from "@/redux/hook";
import { useGiveDonationMutation } from "@/redux/features/donation/donationApi";

const SupplyDetail = () => {
  const [amount, setAmount] = useState(100);
  const { user } = useAppSelector((state) => state.auth);
  const [giveDonation] = useGiveDonationMutation();

  const { id } = useParams();
  const { data, isFetching } = useGetSingleSupplyQuery(id);
  if (isFetching) {
    return <Loading />;
  }

  const supply: TSupply = data?.result;
  const handleDonate = async (_id: string) => {
    if (!user) {
      return toast.error("Please login before donation", { duration: 1000 });
    }

    const donationData = {
      email: user.email,
      amount: amount,
      supplyId: _id,
    };
    const res = await giveDonation(donationData).unwrap();
    window.location.replace(res.url);
  };
  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="md:h-[360px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full md:h-full  object-cover"
                src={supply?.image}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="m-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
              {supply?.title}
            </h2>

            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Supply Coast Amount:
                </span>
                <span className="text-gray-600 ms-3 dark:text-gray-300">
                  ${supply?.amount}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Category:{" "}
                <span className="bg-yellow-300">{supply?.category}</span>
              </span>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Supply Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Nutritious food rations with a long shelf life, suitable for
                emergency situations and disaster relief efforts.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-2">
                Select A Amount
              </h2>
            </div>
            <DonateAmountCard setAmount={setAmount} />

            <div className="flex -mx-2 my-10 mb-4">
              <div className="w-1/2 px-2">
                <Button
                  onClick={() => handleDonate(supply?._id as string)}
                  variant="secondary"
                  className="w-full"
                >
                  Donate Now
                </Button>
              </div>
              <div className="w-1/2  px-2">
                <Button
                  className="w-full"
                  onClick={() =>
                    toast.success("We will remind you later!", {
                      duration: 1000,
                    })
                  }
                >
                  Add to Wishlist <HeartCrack className="size-5 ms-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-full h-full object-contain my-2"
          src="/public/ssl.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default SupplyDetail;
