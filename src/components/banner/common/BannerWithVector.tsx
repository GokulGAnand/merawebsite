import React from 'react';
import Image, { StaticImageData } from 'next/image';
import BannerHeader from './BannerHeader';
import clsx from 'clsx';

interface BannerWithVectorProps {
  heading: string;
  subHeading: string;
  splitHeadingFirstPart?: string;
  splitHeadingSecondPart?: string;
  image?: React.ReactNode;
  srcPath?: StaticImageData;
  srcMobile?: StaticImageData;
  srcVector?: StaticImageData;
  isInspection?: boolean;
}

const BannerWithVector = (props: BannerWithVectorProps) => {
  const {
    heading,
    subHeading,
    splitHeadingFirstPart,
    splitHeadingSecondPart,
    srcPath,
    srcMobile,
    srcVector,
    isInspection,
  } = props;
  return (
    <div
      className={clsx(
        'hero bg-opacity-90 relative',
        isInspection ? 'xl:h-[550px]' : 'xl:h-[650px]',
      )}
    >
      <>
        <div
          className={clsx(
            'relative h-full w-full bg-gradient-to-r from-[#53BDE5] to-[#2B6FB7] bg-opacity-90 z-10 opacity-90 ',
            isInspection ? 'py-44 lg:py-52' : 'py-52 lg:py-72',
          )}
        ></div>
        <div className='flex w-full h-auto absolute z-20'>
          <div className='flex-col h-full'>
            {srcVector && (
              <Image
                src={srcVector}
                alt='Banner Vector'
                className='h-full hidden lg:flex skew-y-[30deg]'
              />
            )}
          </div>
          <div className='flex-col h-full'>
            {srcVector && (
              <Image
                src={srcVector}
                alt='Banner Vector'
                className='h-full hidden lg:flex skew-y-12'
              />
            )}
          </div>
        </div>
        {isInspection && (
          <div className='absolute z-40 top-0'>
            <BannerHeader
              heading={heading}
              subHeading={subHeading}
              splitHeadingFirstPart={splitHeadingFirstPart}
              splitHeadingSecondPart={splitHeadingSecondPart}
              isInspection
            />
          </div>
        )}
        {!isInspection && (
          <div className='absolute z-40 top-0'>
            <BannerHeader heading={heading} subHeading={subHeading} />
          </div>
        )}
        <div className='w-full absolute z-30 bottom-0'>
          {srcPath && (
            <Image
              src={srcPath}
              alt='Banner'
              className='object-fill h-full w-full hidden sm:flex'
            />
          )}
          {srcMobile && (
            <Image
              src={srcMobile}
              alt='Banner Mobile'
              className='object-fill h-full  w-full flex sm:hidden'
            />
          )}
        </div>
      </>
    </div>
  );
};

export default BannerWithVector;
