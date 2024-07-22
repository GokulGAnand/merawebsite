'use client';
import React from 'react';
import SectionBlock from '../SectionBlock';
import HiringSection from './CallToAction';
import { hiring } from '@/data/career';
import { hiringButton } from '@/data/career';
import SectionBannerBackground from '../SectionBannerBackground';

const Hiring = () => {
  return (
    <SectionBlock className='last:pb-0 mt-10 pb-12 lg:pb-44'>
      <div className='relative flex w-full overflow-hidden bg-contactFormBackgroundColor  pt-10 pb-48 md:pt-8 px-[6%] md:px-[6.15%] lg:px-[7%] xl:px-[7.25%] md:py-96 lg:py-8 xl:py-16'>
        <SectionBannerBackground
          Banner={hiring.vector}
          BannerMobile={hiring.vector_mobile}
          BannerTab=''
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
