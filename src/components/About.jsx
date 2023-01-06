import { motion } from "framer-motion";
import { projectVariant } from "../utility/variant";

import avatar from "../assets/img-repo-2-1.webp";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <motion.section
      className='bg-zinc-900'
      id='about'
      initial='offScreen'
      whileInView={"onScreen"}
      variants={projectVariant}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <div className='t-container md:px-10'>
        <SectionTitle number={1} text='About Me' />
        <div className='md:flex md:gap-x-2 space-y-8 md:space-y-0'>
          <div className='text-zinc-200 md:flex-[1.5]  md:max-w-xl w-full space-y-6 text-lg'>
            <p className=' '>
              I was overseeing food production processes, ensuring their due
              processes are being followed from the beginning to the end of
              production.
            </p>
            <p>
              I've always been fascinated by technology and the getting into
              tech, a simple dm to Quincy Larson and his heartwarming response,
              guidance through sharing of articles and sharing his own story
              made believe it was possible.
            </p>
            <p>Now I sleep and wake up to Html,Css, Javascript and React.</p>
            <p>Technologies I am recently working with are:</p>
            <ul className='grid grid-cols-2 space-y-1'>
              <li>React</li>
              <li>Javascript</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </div>
          <div className='md:flex-1 flex justify-end ss:justify-start md:justify-center relative before:rounded before:absolute before:max-w-xs before:w-56 before:h-56 ss:before:w-full  ss:before:h-80 before:border-solid before:border-2 before:border-zinc-50 before:block before:top-4 before:right-7 ss:before:left-7 lg:before:left-40 before:z-0 hover:before:translate-y-1 transition-all'>
            <img
              src={avatar}
              alt='Ope Kareem'
              className='max-w-xs w-56 h-56 ss:w-full ss:h-80 mr-12 ss:mr-0 relative object-cover z-[1] grayscale hover:grayscale-0 transition-all rounded  '
            />
            {
              // <svg
              //   viewBox='0 0 300 300'
              //   className='max-w-xs w-full h-80 absolute top-7 left-4'
              // >
              //   <rect
              //     className='w-full h-full stroke-zinc-50 stroke-2'
              //     fill='transparent'
              //   />
              // </svg>
            }
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
