import React from 'react';
import HeaderWithBranding from '../headers/HeaderWithBranding';
import { MeraPartners } from '@/data/partner';
import Image from 'next/image';

const PartnerWithUs = () => {
  return (
    <div className='mt-24 flex flex-col justify-center w-full '>
      <div className='flex flex-col justify-center'>
        <HeaderWithBranding
          heading='Why partner with us'
          subHeading='Sell your car the more money way, in three easy steps'
        />
      </div>
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-9 gap-5 my-12 w-[90%] lg:w-[88%] xl:w-[85%]'>
          {MeraPartners.map((cardItem) => {
            const { content, image } = cardItem;
            return (
              <div
                key={content}
                className='relative flex flex-col md:flex-row lg:flex-col max-w-sm md:max-w-full lg:max-w-sm p-5 border-serviceCardBorder border border-solid shadow-[-20px_17px_30px_0px_rgba(51,102,255,0.05)] rounded-3xl'
              >
                <div className='rounded-lg overflow-hidden'>
                  <Image src={image} alt={content} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
