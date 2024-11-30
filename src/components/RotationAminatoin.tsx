import { motion } from "framer-motion";
const RotationAminatoin = () => {
  return (
    <div className="track w-[80%]  mt-6 h-[300px] flex justify-center items-center ">
      <motion.div
        className="box flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Rotation
      </motion.div>
    </div>
  );
};
export default RotationAminatoin;
