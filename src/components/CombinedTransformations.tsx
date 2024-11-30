import { motion } from "framer-motion";
const CombinedTransformations = () => {
  const boxVariants = {
    initial: {
      x: 0, // Start position (horizontal)
      y: 0, // Start position (vertical)
      scale: 1, // Normal size
      rotate: 0, // No rotation
    },
    animate: {
      x: 200, // Move diagonally to the right
      y: 200, // Move diagonally down
      scale: 1.5, // Increase size
      rotate: 360, // Full rotation
    },
  };
  return (
    <div className="track w-[80%]  mt-6 h-[700px] flex justify-center items-center ">
      <motion.div
        className="box flex items-center justify-center cursor-pointer"
        variants={boxVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 3, // Animation duration in seconds
          repeat: Infinity, // Repeat infinitely
          repeatType: "reverse", // Reverse the animation on each loop
          ease: "easeInOut", // Smooth easing
        }}
      >
        Combined
      </motion.div>
    </div>
  );
};
export default CombinedTransformations;
