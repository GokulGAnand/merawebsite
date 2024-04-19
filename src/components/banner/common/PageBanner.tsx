import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import React from 'react';

interface PageBannerProps {
  heading: string;
  subHeading: string;
}

const PageBanner = (props: PageBannerProps) => {
  const { heading, subHeading } = props;
  return (
    <div className='hero min-h-[300px] bg-gradient-to-r from-[#53BDE5] to-[#2B6FB7] bg-opacity-90'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-xl'>
          <HeaderWithBranding
            heading={heading}
            subHeading={subHeading}
            isBannerHead
          />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
