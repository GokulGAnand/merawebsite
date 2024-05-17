import React from 'react';

export default function SearchBar() {
  return (
    <div className='w-full flex lg:flex-row flex-col py-5 lg:gap-0 gap-4'>
      <input
        placeholder='Search your brand'
        className=' lg:rounded-l-md lg:rounded-r-none rounded-md border border-solid border-formInputBorder py-3 lg:w-3/4 w-full'
      />
      <button className='bg-whiteButtonText rounded-md lg:rounded-l-none lg:rounded-r-md py-3 text-white lg:w-1/4 w-full font-semibold text-md leading-4  px-14'>
        Get your car price
      </button>
    </div>
  );
}
