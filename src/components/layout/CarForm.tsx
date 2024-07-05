import React from 'react';
import UpVector from '~/images/SellUsedCars/VectorUp.svg';
import DownVector from '~/images/SellUsedCars/VectorDown.svg';

export default function CarFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-carFormGradient'>
      <div className='relative overflow-x-clip'>
        {/* <div className='absolute -left-16 top-0 hidden lg:flex z-50'>
          <UpVector height={410} width={870} />
        </div> */}
        <div className='relative z-10 mt-16'>{children}</div>
        {/* <div className='absolute -right-2 -bottom-24 hidden lg:flex z-50'>
          <DownVector height={410} width={870} />
        </div> */}
      </div>
    </div>
  );
}
