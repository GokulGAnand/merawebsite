import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';
import BannerWithVector from '@/components/banner/common/BannerWithVector';
import InspectionBanner from '~/images/MeraPartners/InspectionBanner.png';

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
        {/* <BannerWithVector
          heading=''
          subHeading=''
          srcPath={InspectionBanner}
          srcMobile={InspectionBanner}
        /> */}
        {children}
      </SectionBlock>
    </>
  );
}
