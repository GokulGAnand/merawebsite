import { Logos } from '@/data/logos';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Divider from '../utils/Divider';

const AutoplaySlider = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='flex w-[100%] lg:w-[88%] xl:w-[85%] pt-24 gap-x-5'>
          <Divider className='flex-grow border-t-2 border-partnerDividerColor' />
          <div className='flex'>
            <div className='bg-bannerChipColor h-9 rounded-3xl flex align-middle place-items-center max-w-sm '>
              <ul className='list-none'>
                <li
                  className='flex items-center text-base font-bold text-bannerChipText px-10'
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <span className='h-1 w-1 bg-bannerChipText rounded-full mr-2'></span>
                  <div className='items-center'>Our Partners</div>
                </li>
              </ul>
            </div>
          </div>
          <Divider className='flex-grow border-t-2 border-partnerDividerColor' />
        </div>
      </div>

      <div>
        <div className='flex gap-x-6 pt-10 justify-center'>
          {Logos.map((logo) => {
            const { label, icon } = logo;
            return (
              <div className='items-contain justify-center' key={label}>
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AutoplaySlider;
