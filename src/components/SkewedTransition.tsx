import { motion } from "framer-motion";
import { useState } from "react";
const SkewedTransition = () => {
  const [isSkewed, setIsSkewed] = useState(false);
  const boxVariants = {
    skewed: { skewX: 30 },
    normal: { skewX: 0 },
  };

  return (
    <div className="track w-[80%]  mt-6 h-[300px] flex justify-center items-center ">
      <motion.div
        className="box flex items-center justify-center cursor-pointer"
        variants={boxVariants}
        initial="normal"
        transition={{
          duration: 0.9,
        }}
        onClick={() => setIsSkewed(!isSkewed)}
        animate={isSkewed ? "skewed" : "normal"}
      >
        Click Here to Skew
      </motion.div>
    </div>
  );
};
export default SkewedTransition;
