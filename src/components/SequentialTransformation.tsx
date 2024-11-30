import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const SequentialTransformation = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.5, // Delay of 0.5 seconds between each child animation
      },
    },
  };
  const squareVariants = {
    initial: { x: 0, rotate: 0, opacity: 0 },
    animate: {
      x: 150, // Move to the right
      rotate: 360, // Rotate fully
      opacity: 1, // Fade in
      transition: {
        duration: 2,
        repeat: Infinity, // Repeat infinitely
        repeatType: "reverse", // Reverse the animation on each loop
        ease: "easeInOut",
      }, // Animation duration
    },
  };
  return (
    <div className="track w-[80%]  mt-6 h-[300px] flex justify-center items-center ">
      <div className="container w-full h-screen flex justify-center items-center">
        <motion.div
          className="flex space-x-4"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* Three squares */}
          <motion.div
            className="w-16 h-16 bg-blue-500 rounded-lg"
            variants={squareVariants}
          />
          <motion.div
            className="w-16 h-16 bg-green-500 rounded-lg"
            variants={squareVariants}
          />
          <motion.div
            className="w-16 h-16 bg-red-500 rounded-lg"
            variants={squareVariants}
          />
        </motion.div>
      </div>
    </div>
  );
};
export default SequentialTransformation;
