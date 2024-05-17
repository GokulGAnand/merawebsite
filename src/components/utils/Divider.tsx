import React from 'react';

export default function Divider({ className }) {
  return (
    <div className='relative flex py-5 w-full items-center'>
      <div className={className}></div>
      <div className={className}></div>
    </div>
  );
}
