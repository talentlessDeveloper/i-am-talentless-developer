import { motion } from "framer-motion";
import { projectVariant } from "../utility/variant";

import avatar from "../assets/img-repo-2-1.webp";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <motion.section className='bg-zinc-900' id='about'>
      <div className='t-container md:px-10'>
        <SectionTitle number={1} text='About Me' />
        <div className='md:flex md:gap-x-2 space-y-8 md:space-y-0'>
          <div className='text-zinc-200 md:flex-[1.5]  md:max-w-xl w-full space-y-6 text-lg '>
            <p className=' '>
              I dedicated myself to overseeing food production processes,
              meticulously ensuring adherence to due processes from inception to
              completion.
            </p>

            <p>
              However, the allure of technology has always surrounded me, with
              its boundless possibilities, remarkable advancements across
              industries, and unprecedented achievements. I became inspired me
              to embark on a transformative learning journey.
            </p>

            <motion.p>
              Now, my days are defined by an unyielding passion for HTML, CSS,
              JavaScript, and React. .
            </motion.p>
            <p>Technologies I am recently working with are:</p>
            <ul className='grid grid-cols-2 space-y-1 font-semibold tracking-wide'>
              <li>React</li>
              <li>Javascript</li>
              <li>Html</li>
              <li>Css</li>
            </ul>
          </div>
          <div className='md:flex-1  flex justify-end ss:justify-start md:justify-center relative before:md:hidden before:rounded before:absolute before:max-w-xs before:w-56 before:h-56 ss:before:w-full  ss:before:h-80 before:border-solid before:border-2 before:border-zinc-50 before:block before:top-4 before:right-7 ss:before:left-7 lg:before:left-40 before:z-0 hover:before:translate-y-1 transition-all'>
            <img
              src={avatar}
              alt='Ope Kareem'
              className='max-w-md w-56 h-56 ss:w-full ss:h-80 mr-12 ss:mr-0 relative object-cover z-[1] grayscale hover:grayscale-0 transition-all rounded md:sticky md:top-2   md:w-full '
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
