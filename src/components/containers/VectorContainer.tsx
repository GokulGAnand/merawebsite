import React from 'react';
import UpVector from '~/images/SellUsedCars/VectorUp.svg';
import DownVector from '~/images/SellUsedCars/VectorDown.svg';

export default function VectorContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <div className='flex'>
        <UpVector height={410} width={870} />
      </div> */}
      {children}
      {/* <div className='flex justify-end'>
        <DownVector height={410} width={870} />
      </div> */}
    </div>
  );
}
