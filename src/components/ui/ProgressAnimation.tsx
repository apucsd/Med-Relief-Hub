import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";
const ProgressAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className=" h-1 fixed w-full   mx-auto bg-primary"
      style={{ scaleX, zIndex: 99999, transformOrigin: "0% 0%" }}
    />
  );
};

export default ProgressAnimation;
