import React from "react";
import { motion } from "framer-motion";
import { containerVariant, logoVariant } from "../utility/variant";
import Logo from "./Logo";

const EntranceLoader = ({ setLoadEntrance }) => {
  return (
    <motion.section
      className='h-screen  flex justify-center items-center'
      variants={containerVariant}
      animate='animate'
      onAnimationComplete={() => setLoadEntrance(false)}
    >
      <Logo
        variant={logoVariant}
        width={400}
        height={100}
        fontSize='text-[13rem]'
        fill='transparent'
        anchor='middle'
      />
    </motion.section>
  );
};

export default EntranceLoader;
