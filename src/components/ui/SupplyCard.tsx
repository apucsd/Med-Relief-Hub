import { Link } from "react-router-dom";
import { Button } from "./button";
import { TSupply } from "@/types/type";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

const SupplyCard = ({ image, amount, category, title, _id }: TSupply) => {
  const varient = {
    initial: { rotate: 0, scale: 1 },
    animate: { rotate: 1, scale: 1.2, transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate"
      className="relative w-[369px]   mx-auto md:h-[300px]"
    >
      <img
        className="md:w-[250px] w-full h-[160px]  md:border"
        src={image}
        alt=""
      />
      <motion.div
        variants={varient}
        className="md:w-[338px] w-full h-[200px] mx-auto text-slate-800  md:absolute top-[30%] space-y-2 left-4  bg-white p-4 md:rounded shadow-lg"
      >
        <div className="bg-[#F2F4F7] w-fit rounded p-0.5">
          <h1 className="text-green-500 text-sm drop-shadow-sm">{category}</h1>
        </div>
        <div className="flex justify-start">
          <p className="font-semibold text-lg">{title}</p>
        </div>
        <div className="size-2 bg-green-500 w-full rounded"></div>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-2xl font-bold text-slate-900">
              ${amount}{" "}
            </span>
            <span className="text-sm text-slate-900">per pack</span>
          </p>
          <p className="bg-[#F2F4F7] p-2 rounded-full">
            <Share2 className="size-4" />
          </p>
        </div>
        <div>
          <Link to={`/supplies/${_id}`}>
            <Button variant="secondary" className="w-full my-1 h-9">
              See More
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
    // <motion.div
    //   whileHover={{
    //     scale: 1.1,
    //     transition: {
    //       duration: 0.2,
    //       type: "spring",
    //       stiffness: 100,
    //     },
    //   }}
    //   animate={{ rotate: 360 }}
    //   className="relative w-full  md:max-w-xs my-2 mx-auto overflow-hidden rounded-lg bg-white shadow"
    // >
    //   <div>
    //     <img
    //       className="h-[150px] rounded-md hover:rounded-br-none  transition-all duration-500 object-cover  w-full"
    //       src={image}
    //       alt="supply card"
    //     />
    //   </div>

    //   <div className="mt-4 px-5 pb-5">
    //     <div>
    //       <h5 className="text-xl font-semibold tracking-tight text-slate-900">
    //         {title}
    //       </h5>
    //     </div>
    //     <div className="mt-2.5 mb-5 flex items-center">
    //       <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
    //         {category}
    //       </span>
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <p>
    //         <span className="text-3xl font-bold text-slate-900">
    //           ${amount}{" "}
    //         </span>
    //         <span className="text-sm text-slate-900">per pack</span>
    //       </p>
    //       <Link to={`/supplies/${_id}`}>
    //         <Button className="absolute bottom-0 right-0 rounded-tr-none rounded-bl-none rounded-tl-[20px]">
    //           View Details
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>
    // </motion.div>
  );
};

export default SupplyCard;
