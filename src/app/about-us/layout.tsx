import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/colors.css';
import PageBanner from '@/components/banner/common/PageBanner';
import SectionBlock from '@/components/SectionBlock';
import Banner from 'public/images/AboutUs/AboutBanner.png';
import AboutBannerMobile from 'public/images/AboutUs/AboutBannerMobile.png';

export const metadata: Metadata = {
  title: 'About us',
  description: 'About Us Page',
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let showImage: true;
  return (
    <>
      <SectionBlock>
        <PageBanner
          heading='About us'
          subHeading='Home/About us'
          srcPath={Banner}
          srcMobile={AboutBannerMobile}
        />
        {children}
      </SectionBlock>
    </>
  );
}
