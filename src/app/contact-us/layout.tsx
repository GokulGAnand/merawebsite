import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/colors.css';
import PageBanner from '@/components/banner/common/PageBanner';
import SectionBlock from '@/components/SectionBlock';
import Banner from 'public/images/ContactUs/ContactUsBanner.jpg';
import AboutBannerMobile from 'public/images/AboutUs/AboutBannerMobile.png';
import ToyBannerTab from 'public/images/MeraPartners/ToyCarBannerTab.png';

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Contact Us Page',
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionBlock>
        <PageBanner
          heading='Contact us'
          subHeading='Home/Contact us'
          srcPath={Banner}
          srcMobile={AboutBannerMobile}
        />
        {children}
      </SectionBlock>
    </>
  );
}
