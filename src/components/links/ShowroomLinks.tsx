import { showroomLinks } from '@/data/showrooms';
import Link from 'next/link';
import React from 'react';

export default function ShowroomLinks() {
  return (
    <div className='mt-8'>
      <div className='text-md font-bold leading-6 '>Sell your car</div>
      <div className=' text-sm mt-4 leading-8'>
        {showroomLinks.map((showroom, index) => (
          <React.Fragment key={showroom.name}>
            <Link href={showroom.link} target='_blank'>
              {showroom.name}
            </Link>

            {index !== showroomLinks.length - 1 && ' | '}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
