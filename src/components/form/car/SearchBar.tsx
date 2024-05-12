import React from 'react';

export default function SearchBar() {
  return (
    <div className='w-full flex py-5'>
      <input
        placeholder='Search your brand'
        className=' rounded-l-md border border-solid border-formInputBorder py-3 w-3/4'
      />
      <button className='bg-whiteButtonText rounded-r-md py-3 text-white w-1/4  font-semibold text-md leading-4  px-14'>
        Get your car price
      </button>
    </div>
  );
}
