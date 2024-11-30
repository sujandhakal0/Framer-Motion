import { motion } from "framer-motion";
const BouncingCircle = () => {
  return (
    <div className="track w-[80%]  mt-6 h-[300px] flex justify-center  ">
      <motion.div
        className="circle-box flex items-center justify-center"
        animate={{ y: [0, 100, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        Vertical Moment
      </motion.div>
    </div>
  );
};
export default BouncingCircle;
