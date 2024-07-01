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
        'hero bg-opacity-90 relative overflow-x-clip',
        isInspection ? 'xl:h-[550px]' : 'xl:h-[650px]',
      )}
    >
      <div
        className={clsx(
          'relative h-full w-full bg-gradient-to-r from-[#53BDE5] to-[#2B6FB7] bg-opacity-90 z-10 opacity-90 ',
          isInspection ? 'py-44 lg:py-52' : 'py-52 lg:py-72',
        )}
      ></div>
      <div className='flex w-full h-auto z-20'>
        <div className='flex-col h-full'>
          {srcVector && (
            <div>
              <Image
                src={srcVector}
                alt='Banner Vector'
                className='h-full absolute -top-72 -left-20 hidden xl:flex skew-y-[30deg]'
              />
              <Image
                src={srcVector}
                alt='Banner Vector'
                className={clsx(
                  isInspection
                    ? 'h-1/2 w- md:hidden flex absolute -top-10 -left-56 skew-y-12'
                    : 'hidden',
                )}
              />
            </div>
          )}
        </div>
        <div className='flex-col h-full'>
          {srcVector && (
            <div>
              <Image
                src={srcVector}
                alt='Banner Vector'
                className='h-full absolute top-36 right-3 hidden xl:flex skew-y-12'
              />
              <Image
                src={srcVector}
                alt='Banner Vector'
                className={clsx(
                  isInspection
                    ? 'h-1/2 md:hidden flex absolute bottom-20 -right-10 skew-y-12'
                    : 'hidden',
                )}
              />
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col'>
        {isInspection ? (
          <div className='z-40'>
            <BannerHeader
              heading={heading}
              subHeading={subHeading}
              splitHeadingFirstPart={splitHeadingFirstPart}
              splitHeadingSecondPart={splitHeadingSecondPart}
              isInspection
            />
          </div>
        ) : (
          <div className=' z-40'>
            <BannerHeader heading={heading} subHeading={subHeading} />
          </div>
        )}
        <div className='w-full z-30'>
          {srcPath && (
            <Image
              src={srcPath}
              alt='Banner'
              className='object-fill  h-full w-full hidden sm:flex'
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
      </div>
    </div>
  );
};

export default BannerWithVector;
