import Image, { StaticImageData } from 'next/image';
import React from 'react';
import HeaderWithBranding from '../headers/HeaderWithBranding';
import Quote from '~/images/Careers/svg/Quote.svg';

interface CareerSlideProps {
  heading: string;
  description: string;
  imageSrc: StaticImageData;
}

const CareerSlide: React.FC<CareerSlideProps> = ({
  heading,
  description,
  imageSrc,
}) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between'>
      <div className='w-3/6 pl-36'>
        <div className='flex flex-row mt-12 lg:mt-24'>
          <div className='flex md:hidden pt-3'>
            <Quote width={18} heigth={13} />
          </div>
          <div className='hidden md:flex pt-3'>
            <Quote width={26} heigth={23} />
          </div>
          <HeaderWithBranding isStart heading={heading} subHeading='' />
        </div>
        <p className='text-sm lg:text-lg font-normal text-subHeadingColor pt-3'>
          {description}
        </p>
      </div>
      <div className='border-serviceCardBorder border rounded-2xl mt-10 w-1/4 mr-32'>
        <Image src={imageSrc} alt='Carousel slide' className='rounded-xl p-4' />
      </div>
    </div>
  );
};

export default CareerSlide;
