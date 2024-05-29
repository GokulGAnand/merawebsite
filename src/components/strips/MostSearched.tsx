import { most } from '@/data/most';
import Link from 'next/link';
import React from 'react';

export default function MostSearched() {
  return (
    <div className='flex justify-center'>
      <div className=' flex-col justify-center w-[90%] lg:w-[88%] xl:w-[85%] gap-2 '>
        <div className='text-lg font-medium leading-5 text-headerLinkColor'>
          Most Searched on Meracars
        </div>
        <div className='py-5 flex flex-col gap-2'>
          {most.map((item) => {
            return (
              <Link
                key={item.link}
                className='text-bannerChipText underline flex gap-4'
                href={item.link}
              >
                Sell used cars in {item.showroom}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
