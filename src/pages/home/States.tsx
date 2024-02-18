import SectionTitle from "@/components/ui/SectionTitle";
import useAnimateComponent from "@/hooks/useAnimateComponent";
import { motion } from "framer-motion";
const States = () => {
  const { ref, variants, control } = useAnimateComponent();
  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={control}
      initial="hidden"
      className="container relative overflow-y-hidden my-10"
    >
      <img
        className="w-[500px] h-[500px] -z-30 absolute -left-[20%] -top-1/2 "
        src="Oval.svg"
        alt=""
      />
      <img
        className="w-[400px] h-[500px] -z-30 absolute -bottom-[30%] -right-0"
        src="Plant.svg"
        alt=""
      />
      <SectionTitle name="States" title="Facts & Figures " />
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-12 divide-x divide-gray-300">
        <div className="text-center">
          <img className="size-20 mx-auto" src="food.svg" alt="" />
          <h3 className="text-3xl font-extrabold text-secondary mt-5">400+</h3>
          <p className="font-semibold mt-3">Food Packets</p>
        </div>
        <div className="text-center">
          <img className="size-20 mx-auto" src="bed.svg" alt="" />
          <h3 className="text-3xl font-extrabold text-secondary mt-5">450+</h3>
          <p className="font-semibold mt-3">Bed Kits</p>
        </div>
        <div className="text-center">
          <img className="size-20 mx-auto" src="medical-kit.svg" alt="" />
          <h3 className="text-3xl font-extrabold text-secondary mt-5">500+</h3>
          <p className="font-semibold mt-3">Medical Kits</p>
        </div>
        <div className="text-center">
          <img className="size-20 mx-auto" src="camp.svg" alt="" />
          <h3 className="text-3xl font-extrabold text-secondary mt-5">600+</h3>
          <p className="font-semibold mt-3">Medical Camp</p>
        </div>
      </div>
    </motion.div>
  );
};

export default States;
