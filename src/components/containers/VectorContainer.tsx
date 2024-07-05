import React from 'react';
import UpVector from '~/images/SellUsedCars/VectorUp.svg';
import DownVector from '~/images/SellUsedCars/VectorDown.svg';

export default function VectorContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative overflow-x-clip'>
      <div className='absolute -left-36 bottom-36 hidden lg:flex z-20'>
        <UpVector height={410} width={870} />
      </div>
      <div className='absolute -right-36 -top-40 flex lg:hidden z-20'>
        <UpVector height={210} width={870} />
      </div>
      <div className='mt-16'>{children}</div>
      <div className='absolute -right-36 top-60 hidden lg:flex z-20'>
        <DownVector height={410} width={870} />
      </div>
      <div className='absolute -left-36 -top-20 flex lg:hidden z-20'>
        <DownVector height={210} width={870} />
      </div>
    </div>
  );
}
