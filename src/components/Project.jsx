import React from "react";
import { motion } from "framer-motion";
import { projectVariant } from "../utility/variant";

const Project = ({ title, text, img, techLists, reverse, link, live }) => {
  return (
    <motion.div
      className='px-6 pt-6 pb-5 relative'
      initial='offScreen'
      whileInView={"onScreen"}
      variants={projectVariant}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <div
        className={`md:flex ${
          reverse ? "flex-row-reverse md:text-right" : null
        }`}
      >
        <div className='space-y-8 relative z-[2] md:flex-1'>
          <h2 className='font-sans font-bold text-zinc-50 text-xl md:text-3xl  relative  z-[2] '>
            {title}
          </h2>
          <div className='text-zinc-200 md:text-xl md:bg-black/95 md:p-6 relative md:z-[4]'>
            <p>{text}</p>
          </div>

          <ul
            className={`flex flex-wrap gap-x-3 ${
              reverse ? "md:justify-end" : null
            }`}
          >
            {techLists.map((techList) => {
              return (
                <li key={`${title}-${techList}`} className='text-zinc-300'>
                  {techList}
                </li>
              );
            })}
          </ul>
          <div
            className={`flex mt-8 gap-x-2 relative z-[2] ${
              reverse ? "md:justify-end" : null
            }`}
          >
            <a href={link} rel='noreferrer' target='_blank' aria-label='Github'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6 stroke-zinc-300  hover:stroke-zinc-50 transition-all'
              >
                <title>GitHub</title>
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
              </svg>
            </a>

            <a
              href={live}
              rel='noreferrer'
              target='_blank'
              aria-label='External'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6 stroke-zinc-300 hover:stroke-zinc-50 transition-all'
              >
                <title>External Link</title>
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                <polyline points='15 3 21 3 21 9'></polyline>
                <line x1='10' y1='14' x2='21' y2='3'></line>
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`md:flex-1 md:relative md:z-[1] ${
            reverse ? "-mr-36" : "-ml-36"
          }`}
        >
          <img
            src={img}
            alt='project screenshot'
            className='grayscale hover:grayscale-0 z-[1] absolute md:relative top-0 left-0 object-cover w-full h-full'
          />
          <div className='md:hidden absolute top-0 left-0 object-cover w-full h-full bg-black/95 z-[1]'></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
