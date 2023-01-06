import React from "react";

const Message = () => {
  return (
    <div className='space-y-2'>
      <label htmlFor='message' className='block'>
        Message
      </label>
      <textarea
        name='message'
        id='message'
        className='rounded w-full py-3 px-3 min-h-[200px] text-zinc-900'
        placeholder='Enter Your Message'
        required
      ></textarea>
    </div>
  );
};

export default Message;
