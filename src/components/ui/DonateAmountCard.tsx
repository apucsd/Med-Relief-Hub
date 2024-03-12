import { Dispatch } from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

const DonateAmountCard = ({
  setAmount,
}: {
  setAmount: Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Tabs
        onValueChange={(value) => {
          const newValue = Number(value);
          setAmount(newValue);
        }}
        defaultValue="100"
        className="w-full "
      >
        <TabsList className="flex justify-center w-fit flex-wrap h-full">
          <TabsTrigger
            className="font-semibold text-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            value="100"
          >
            100$
          </TabsTrigger>
          <TabsTrigger
            className="font-semibold text-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            value="200"
          >
            200$
          </TabsTrigger>

          <TabsTrigger
            className="font-semibold text-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            value="400"
          >
            400$
          </TabsTrigger>
          <TabsTrigger
            className="font-semibold text-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            value="600"
          >
            600$
          </TabsTrigger>
          <TabsTrigger
            className="font-semibold text-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            value="800"
          >
            800$
          </TabsTrigger>
          <TabsTrigger
            className="font-semibold text-lg data-[state=active]:bg-secondary data-[state=active]:text-white"
            value="1000"
          >
            1000$
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default DonateAmountCard;
