import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='t-container mt-24 text-zinc-50 text-center pb-8 font-mono'>
        <p className='text-lg'>
          Coded by &copy;{" "}
          <a
            href='https://github.com/talentlessDeveloper'
            className='text-zinc-300 text-sm hover:text-zinc-50 transition-colors'
          >
            Ope Kareem
          </a>{" "}
          {new Date().getFullYear()}
          <br />
          Design Inspiration from{" "}
          <a
            href='https://brittanychiang.com/'
            className='text-zinc-300 text-sm hover:text-zinc-50 transition-colors'
          >
            Brittany Chiang
          </a>
        </p>

        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
