import React from 'react';
import UpVector from '~/images/SellUsedCars/VectorUp.svg';
import DownVector from '~/images/SellUsedCars/VectorDown.svg';

export default function VectorContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative'>
      <div className='absolute -left-36 bottom-36 flex z-50'>
        <UpVector height={410} width={870} />
      </div>
      <div className='relative z-10 mt-16'>{children}</div>
      <div className='absolute -right-36 top-60 flex z-50'>
        <DownVector className='' height={410} width={870} />
      </div>
    </div>
  );
}
