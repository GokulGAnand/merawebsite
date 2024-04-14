import React from 'react';
import MeraVectorBlue from '~/svg/MeraCarsBlueVector.svg';

interface Props {
  heading: string;
  subHeading: string;
  isStart?: boolean;
}

export default function HeaderWithBranding(props: Props) {
  const { heading, subHeading, isStart } = props;
  return (
    <div
      className={`flex flex-col ${
        isStart ? '' : 'justify-center items-center'
      }   gap-2 `}
    >
      <div className=' text-3xl font-bold leading-10 flex flex-col  items-start align-middle gap-1 '>
        <div>
          <div className=' flex justify-end'>
            <MeraVectorBlue width={50} heigth={11} />
          </div>
          <div className='flex text-stepsText text-xl sm:text-2xl md:text-3xl'>
            {heading}
          </div>
        </div>
      </div>
      <div
        className={`flex ${
          isStart ? '' : 'align-middle justify-center text-center'
        }   text-subHeadingColor leading-6 text-lg `}
      >
        {subHeading}
      </div>
    </div>
  );
}
