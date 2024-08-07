'use client';
import React from 'react';
import SectionBlock from '../SectionBlock';
import HiringSection from './CallToAction';
import { hiring } from '@/data/career';
import { hiringButton } from '@/data/career';
import SectionBannerBackground from '../SectionBannerBackground';

const Hiring = () => {
  return (
    <SectionBlock className='last:pb-0 mt-10 pb-12 lg:pb-16'>
      <div className='relative flex w-full overflow-hidden bg-contactFormBackgroundColor pt-8 lg:pt-0 pl-4 lg:pl-0 justify-center'>
        <SectionBannerBackground
          Banner={hiring.vector}
          BannerMobile={hiring.vector_mobile}
          BannerTab=''
          isHiring
        />
        <HiringSection
          header={hiring.header}
          main_header={hiring.main_header}
          content={hiring.content}
          image={hiring.image}
          mobileImage={hiring.mobile_image}
          isHiring
          buttonData={hiringButton}
        />
      </div>
    </SectionBlock>
  );
};

export default Hiring;
