import SectionTitle from "@/components/ui/SectionTitle";
import useAnimateComponent from "@/hooks/useAnimateComponent";
import { motion } from "framer-motion";
const EmergencyContacts = () => {
  const { ref, variants, control } = useAnimateComponent();
  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={control}
      initial="hidden"
      className=" py-12 container"
    >
      <SectionTitle name="Contacts" title="  Emergency Contacts" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <img src="police.svg" alt="" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Police
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  911 or local emergency number
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <img src="fire.svg" alt="" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Fire Department
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  911 or local emergency number
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                  <img src="hospital.svg" alt="" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Medical Emergency
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  911 or local emergency number
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmergencyContacts;
