import React from "react";

const Email = () => {
  return (
    <div className='space-y-2'>
      <label htmlFor='email' className='block'>
        Email
      </label>
      <input
        type='email'
        name='user_email'
        id='email'
        className='rounded w-full py-3 px-3 text-zinc-900'
        placeholder='Enter Your Email'
        required
      />
    </div>
  );
};

export default Email;
