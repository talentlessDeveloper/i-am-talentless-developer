import React from "react";

const HeaderMenu = ({ openMenu }) => {
  return (
    <aside
      className={`md:hidden h-screen px-3 py-8 z-20 [width:min(75vw,25rem)] shadow bg-zinc-800 text-xl fixed right-0 top-0 transition-transform duration-300 ${
        openMenu ? "translate-x-0" : "translate-x-[200%]"
      }`}
    >
      <nav className='mt-32 space-y-12 text-zinc-50'>
        <ol className='flex flex-col items-center space-y-10 font-serif '>
          <li className='[counter-increment:section] before:[content:counters(section,".")] before:text-zinc-300 before:block before:text-center hover:text-zinc-300 transition-colors duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] '>
            <a href='#about' className='p-2'>
              About
            </a>
          </li>
          <li className='[counter-increment:section] before:[content:counters(section,".")] before:text-zinc-300 before:block before:text-center hover:text-zinc-300 transition-colors duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]'>
            <a href='#projects' className='p-2'>
              Projects
            </a>
          </li>
          <li className='[counter-increment:section] before:[content:counters(section,".")] before:text-zinc-300 before:block before:text-center hover:text-zinc-300 transition-colors duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)]'>
            <a href='#contact' className='p-2'>
              Contact
            </a>
          </li>
        </ol>
        <div className='text-center'>
          <a
            href='#'
            className='py-2 px-4 border border-solid border-zinc-300 rounded font-serif hover:bg-tint duration-300 transition-colors ease-[cubic-bezier(0.645,0.045,0.355,1)]'
          >
            Resume
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default HeaderMenu;
