import React from "react";

const Socials = () => {
  return (
    <div className='mt-10 space-x-2 '>
      <a
        href='https://twitter.com/talentless_dev'
        target='_blank'
        rel='noreferrer'
        className='inline-block w-fit rounded-full md:text-xl border-2 border-zinc-100 text-zinc-50 hover:bg-tint transition-colors px-2 py-1'
      >
        Twitter
      </a>
      <a
        href='https://github.com/talentlessDeveloper/'
        className='inline-block w-fit rounded-full md:text-xl border-2 border-zinc-100 text-zinc-50 hover:bg-tint transition-colors px-2 py-1'
        target='_blank'
        rel='noreferrer'
      >
        Github
      </a>
    </div>
  );
};

export default Socials;
