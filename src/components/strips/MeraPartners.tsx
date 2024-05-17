import React from 'react';
import MeraPartnersSellRight from './MeraPartnersContent';
import SellRightLinks from '../links/SellRightLinks';

export default function MeraPartners() {
  return (
    <div className='mt-28 flex justify-center '>
      <div className='flex flex-col justify-center w-[90%] lg:w-[88%] xl:w-[85%]'>
        <MeraPartnersSellRight />
        <div className='flex py-16'>
          <SellRightLinks />
        </div>
      </div>
    </div>
  );
}
