import clsx from 'clsx';
import React from 'react';
import MeraVectorBlue from '~/svg/MeraCarsBlueVector.svg';
import MeraVector from '~/svg/MeraCarsVector.svg';

interface Props {
  heading: string;
  lastpartHeading?: string;
  subHeading?: string;
  isStart?: boolean;
  isBannerHead?: boolean;
}

export default function HeaderWithBranding(props: Props) {
  const { heading, lastpartHeading, subHeading, isStart, isBannerHead } = props;
  return (
    <div
      className={clsx(
        'flex flex-col',
        isStart ? '' : 'justify-center items-center',
        isBannerHead ? 'gap-5' : 'gap-2',
      )}
    >
      <div className=' text-3xl font-bold leading-10 flex flex-col  items-start align-middle gap-1 '>
        <div>
          <div className='flex justify-end'>
            {isBannerHead ? (
              <MeraVector width={67} heigth={15} />
            ) : (
              <MeraVectorBlue width={50} heigth={11} />
            )}
          </div>
          <div
            className={clsx(
              'flex ',
              isBannerHead
                ? 'text-white md:text-5xl sm:text-4xl text-3xl '
                : 'text-stepsText text-xl sm:text-2xl md:text-3xl',
            )}
          >
            {heading}
          </div>
          <div
            className={clsx(
              'flex ',
              isBannerHead
                ? 'text-white md:text-5xl sm:text-4xl text-3xl '
                : 'text-stepsText text-xl sm:text-2xl md:text-3xl',
            )}
          >
            {lastpartHeading}
          </div>
        </div>
      </div>
      {subHeading && (
        <div
          className={clsx(
            'flex',
            isStart ? '' : 'align-middle justify-center text-center',
            isBannerHead
              ? 'text-white md:text-lg text-sm leading-5'
              : 'text-subHeadingColor leading-6 text-lg',
          )}
        >
          {subHeading}
        </div>
      )}
    </div>
  );
}
