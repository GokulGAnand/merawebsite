import React from 'react';
import { sellRightContent } from '@/data/sell-right';

const MeraPartnersSellRight = () => {
  return (
    <div>
      {sellRightContent.map((sellRightItem) => {
        return (
          <div key={sellRightItem.id}>
            <div className='text-base text-headerLinkColor font-medium lg:py-4 py-6'>
              {sellRightItem.title}
            </div>
            <div className='text-sm text-headerLinkColor font-normal'>
              {sellRightItem.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeraPartnersSellRight;
