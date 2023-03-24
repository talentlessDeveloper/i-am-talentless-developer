import { motion } from "framer-motion";
import { itemVariant } from "../../utility/variant";

import resume from "../../assets/techCV8.pdf";

const HeaderLinks = () => {
  return (
    <div className='hidden md:flex gap-x-4 text-zinc-50 '>
      <ol className='flex justify-between [counter-reset:section] gap-x-12 font-serif '>
        <motion.li
          variants={itemVariant}
          className='[counter-increment:section] before:[content:counters(section,".")] before:text-zinc-300 hover:text-zinc-300 transition-colors duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] '
        >
          <a href='#about' className='p-2'>
            About
          </a>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className='[counter-increment:section] before:[content:counters(section,".")] before:text-zinc-300 hover:text-zinc-300 transition-colors duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]'
        >
          <a href='#projects' className='p-2'>
            Projects
          </a>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className='[counter-increment:section] before:[content:counters(section,".")] before:text-zinc-300 hover:text-zinc-300 transition-colors duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]'
        >
          <a href='#contact' className='p-2'>
            Contact
          </a>
        </motion.li>
      </ol>
      <motion.div variants={itemVariant}>
        <a
          href={resume}
          download
          className='py-2 px-4 border border-solid border-zinc-300 rounded font-serif hover:bg-tint duration-300 transition-colors ease-[cubic-bezier(0.645,0.045,0.355,1)]'
        >
          Resume
        </a>
      </motion.div>
    </div>
  );
};

export default HeaderLinks;
