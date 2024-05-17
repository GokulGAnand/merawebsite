import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';
import StepsInDetail from '../utils/StepsInDetail';

interface Props {
  index: number;
  heading: string;
  subHeading: string;
  img: string | StaticImport;
  isSecondary?: boolean;
}

export default function ServiceCard(props: Props) {
  const { img, heading, subHeading, index, isSecondary } = props;
  const normalStyle =
    'flex-col border-serviceCardBorder border border-solid shadow-[-20px_17px_30px_0px_rgba(51,102,255,0.05)] rounded-3xl';
  return (
    <div
      className={` flex  md:flex-row lg:flex-col max-w-sm  md:max-w-full lg:max-w-sm ${isSecondary ? '' : normalStyle}`}
    >
      <div className='flex justify-center p-[3.5%] w-full '>
        <Image
          src={img}
          alt='Image'
          className={`${isSecondary ? '' : 'rounded-tl-xl rounded-tr-xl'} object-contain w-full`}
          loading='lazy'
        />
      </div>
      <StepsInDetail
        index={index}
        heading={heading}
        subHeading={subHeading}
        isSecondary={isSecondary}
      />
    </div>
  );
}
