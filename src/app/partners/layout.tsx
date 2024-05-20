import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';
import BannerWithVector from '@/components/banner/common/BannerWithVector';
import MeraPartnersBanner from 'public/images/MeraPartners/MeraPartnersBanner.png';
import MeraPartnersMobileBanner from 'public/images/MeraPartners/MeraPartnersMobileBanner.png';
import RightBannerVector from 'public/images/MeraPartners/RightBannerVector.png';

export const metadata: Metadata = {
  title: 'MeraPartners',
  description: 'MeraPartners Page',
};

export default function MeraPartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionBlock>
        <BannerWithVector
          heading=''
          subHeading=''
          srcPath={MeraPartnersBanner}
          srcMobile={MeraPartnersMobileBanner}
          srcVector={RightBannerVector}
        />
        {children}
      </SectionBlock>
    </>
  );
}
