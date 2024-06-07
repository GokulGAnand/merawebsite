import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';
import BannerWithVector from '@/components/banner/common/BannerWithVector';
import InspectionBanner from '~/images/MeraPartners/InspectionBanner.png';
import InspectionBannerMobile from '~/images/MeraPartners/InspectionMobileBanner.png';
import RightBannerVector from 'public/images/MeraPartners/RightBannerVector.png';
import HeaderWithBranding from '@/components/headers/HeaderWithBranding';
import Heading from '@/components/headers/Heading';

export const metadata: Metadata = {
  title: 'Inspection',
  description: 'Inspection Page',
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
          subHeading='Schedule a comprehensive car inspection'
          srcPath={InspectionBanner}
          srcMobile={InspectionBannerMobile}
          srcVector={RightBannerVector}
          isInspection
        />
        {children}
      </SectionBlock>
    </>
  );
}
