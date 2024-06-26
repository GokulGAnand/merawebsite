import { showroomLinks } from '@/data/showrooms';
import Link from 'next/link';
import React from 'react';

const SellRightLinks = () => {
  return (
    <div>
      <div className='flex text-base text-headerLinkColor font-normal flex-row lg:pb-6 pb-2'>
        Most Searched on Meracars
      </div>
      <div>
        {showroomLinks.map((searchItem) => {
          return (
            <React.Fragment key={searchItem.name}>
              <Link
                href={searchItem.link}
                target='_blank'
                className='flex text-sm font-normal text-bannerChipText underline pb-2'
              >
                Sell used cars in {searchItem.name}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SellRightLinks;
