import { motion } from "framer-motion";
import { heroVariant } from "../utility/variant";

import resume from "../assets/techCv.pdf";

const Hero = () => {
  return (
    <section className='h-screen -mt-24 flex items-center'>
      <div className='t-container' id='main'>
        <div className='md:px-10 text-zinc-400'>
          <h1 className='font-mono overflow-y-hidden'>
            <motion.span
              variants={heroVariant}
              className='text-zinc-300 text-base block mb-2 md:text-lg'
            >
              my name is
            </motion.span>
            <motion.span
              variants={heroVariant}
              className='text-zinc-50 text-2xl md:text-7xl block'
            >
              Ope Kareem
            </motion.span>
            <motion.span
              variants={heroVariant}
              className='text-2xl md:text-7xl block'
            >
              A Frontend Developer
            </motion.span>
          </h1>

          <motion.p
            variants={heroVariant}
            className='text-lg md:text-xl mt-4 font-serif  text-zinc-200 max-w-md'
          >
            Presently a student at AltSchool Africa,building and collaborrating
            with the awesome community
          </motion.p>

          <motion.a
            variants={heroVariant}
            href={resume}
            download
            className='w-fit px-4 py-2 border-zinc-300 border border-solid font-mono text-zinc-50 mt-8 block md:mt-10 hover:bg-tint'
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
