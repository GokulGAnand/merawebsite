import clsx from 'clsx';
import React from 'react';
import MeraVector from '~/svg/MeraCarsVector.svg';

interface BannerProps {
  heading: string;
  subHeading: string;
  isInspection?: boolean;
}

const BannerHeader = (props: BannerProps) => {
  const { heading, subHeading, isInspection } = props;
  return (
    <div className='flex justify-center'>
      <div
        className={clsx(
          'flex-col',
          isInspection ? 'w-full pt-8' : 'w-11/12 lg:w-[55%] pt-9 lg:pt-16',
        )}
      >
        {!isInspection && (
          <div className='flex justify-center'>
            <div className='bg-bannerChipColor h-9 rounded-3xl flex align-middle justify-center place-items-center max-w-sm'>
              <ul className='list-none'>
                <li className='flex items-center text-xs lg:text-base font-bold text-bannerChipText px-3.5 lg:px-10'>
                  <span className='h-1 w-1 bg-bannerChipText rounded-full mr-2'></span>
                  {heading}
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className='flex gap-2 pt-9 text-center relative text-white justify-center'>
          <div
            className={clsx(
              'font-bold text-2xl leading-10 flex flex-col items-start',
              isInspection ? 'lg:text-4xl gap-1' : 'lg:text-5xl gap-1',
            )}
          >
            <div>
              <div
                className={clsx(
                  'flex justify-end lg:hidden',
                  isInspection ? '' : 'mr-6',
                )}
              >
                <MeraVector width={32} height={7} />
              </div>
              <div
                className={clsx(
                  'lg:flex justify-end hidden',
                  isInspection ? '' : 'mr-6',
                )}
              >
                <MeraVector width={67} height={15} />
              </div>
              <div className=''>{subHeading}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
