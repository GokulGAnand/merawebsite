import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';
import StepOne from '~/svg/StepOne.svg';

interface Props {
  index: number;
  heading: string;
  subHeading: string;
  img: string | StaticImport;
}

export default function PartnerCard(props: Props) {
  const { img, heading, subHeading, index } = props;
  return (
    <div className='flex flex-col md:flex-row lg:flex-col max-w-sm md:max-w-full lg:max-w-sm border-serviceCardBorder border border-solid shadow-[-20px_17px_30px_0px_rgba(51,102,255,0.05)] rounded-3xl'>
      <div className='flex justify-center p-[3.5%] w-full'>
        <Image
          src={img}
          alt='Image'
          className='rounded-tl-xl rounded-tr-xl object-contain w-full'
          loading='lazy'
        />
      </div>
      <div className='flex flex-col lg:p-0 md:p-[3.5%]'>
        <div className='flex gap-1 px-[3.5%] pt-2 align-middle'>
          <div className='flex gap-2 justify-center align-middle items-center'>
            <div className='flex flex-col'>
              <StepOne height={17} width={52} />
              <div className='flex justify-center'>
                <p className='text-white -mt-4 text-xs'>STEP {index}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-headerLinkColor px-[3.5%] mt-2'>
          {heading}
        </div>
        <div className='px-[3.5%] flex pt-3 pb-7 text-sm text-headerLinkColor leading-normal font-normal'>
          {subHeading}
        </div>
      </div>
    </div>
  );
}
