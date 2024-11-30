import { motion } from "framer-motion";

const BasicTranscation = () => {
  return (
    <div className="track w-[80%]  mt-6 h-[200px] flex justify-center items-center ">
      <motion.div
        className="box  flex items-center justify-center"
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        Basic Transition
      </motion.div>
    </div>
  );
};
export default BasicTranscation;
