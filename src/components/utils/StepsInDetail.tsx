import React from 'react';
import Steps from '../utils/Steps';

interface StepsInDetailProps {
  index: number;
  heading: string;
  subHeading?: string;
  isSecondary?: boolean;
}

export default function StepsInDetail(props: StepsInDetailProps) {
  const { heading, index, isSecondary, subHeading } = props;
  const primaryTextStyle = 'text-xl md:text-2xl lg:text-xl xl:text-2xl';
  const secondaryTextStyle = 'text-lg md:text-xl lg:text-lg xl:text-xl';
  return (
    <div className='flex flex-col lg:p-0  md:p-[3.5%] '>
      <div className='flex gap-1 px-[3.5%] pt-2 align-middle '>
        <div
          className={`flex ${isSecondary ? 'flex-col items-start' : 'flex-row items-center'} gap-2 justify-center align-middle `}
        >
          <div className='flex '>
            <Steps index={index} />
          </div>
          <div
            className={`font-bold text-headerLinkColor ${isSecondary ? secondaryTextStyle : primaryTextStyle}`}
          >
            {heading}
          </div>
        </div>
      </div>
      <div className=' px-[3.5%] flex pt-3 pb-7 text-sm text-headerLinkColor leading-normal font-normal '>
        {subHeading}
      </div>
    </div>
  );
}
