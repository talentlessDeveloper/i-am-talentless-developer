import React from "react";

const InputName = () => {
  return (
    <div className='space-y-2'>
      <label htmlFor='name' className='block'>
        Name
      </label>
      <input
        type='text'
        name='user_name'
        id='name'
        className='rounded w-full py-3 px-3 text-zinc-900'
        placeholder='Enter Your Name'
        required
      />
    </div>
  );
};

export default InputName;
