import { useState } from 'react';
import { motion } from 'framer-motion';

import Logo from '../Logo';
import HeaderLinks from './HeaderLinks';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // const [hideHeader, setHideHeader] = useState(false);

  // useEffect(() => {
  //   let prevScrollY = 0;

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setHideHeader(currentScrollY > prevScrollY);
  //     prevScrollY = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleMenu = () => {
    setOpenMenu((m) => !m);
  };
  return (
    <header className=" w-full shadow-lg  h-24 backdrop-blur-md overflow-x-clip fixed top-0 left-0 right-0 z-[999]">
      <nav className="t-container flex justify-between items-center ">
        <a href="/" className="z-50" aria-label="home">
          <Logo
            width={100}
            height={100}
            fontSize="text-[10rem]"
            fill="#fff"
            anchor="end"
          />
        </a>

        <HeaderLinks />

        <button
          className="md:hidden space-y-2 z-50"
          aria-label="navigation mobile menu"
          onClick={handleMenu}
        >
          <motion.span
            animate={
              openMenu ? { y: 10, rotate: [-360, -45] } : { y: 0, rotate: 360 }
            }
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 0.45,
            }}
            className={`h-[2px] w-8 bg-zinc-300 block`}
          ></motion.span>
          <motion.span
            animate={openMenu ? { rotate: [360, 45] } : { rotate: -360 }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 0.45,
            }}
            className={`h-[2px] w-7 bg-zinc-300 block`}
          ></motion.span>
          <motion.span
            animate={openMenu ? { y: -10, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.45,
            }}
            className={`h-[2px] w-5 bg-zinc-300 block`}
          ></motion.span>
        </button>
      </nav>

      <HeaderMenu openMenu={openMenu} handleMenu={handleMenu} />
      {openMenu ? (
        <div className="fixed h-screen bg-[rgba(0,0,0,0.8)] inset-0 backdrop-blur-[3px] z-[2]"></div>
      ) : null}
    </header>
  );
};

//  animate={openMenu ? { y: 10, rotate: -25 } : null}
//  animate={openMenu ? { rotate: 25 } : null}
//  animate={openMenu ? { y: -10, opacity: 0 } : null}

export default Header;
