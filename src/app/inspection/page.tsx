import BannerWithVector from '@/components/banner/common/BannerWithVector';
import HowItWorks from '@/components/strips/HowItWorks';
import Pricing from '@/components/strips/Pricing';
import Head from 'next/head';
import * as React from 'react';
import InspectionBanner from '~/images/MeraPartners/InspectionBanner.png';
import InspectionBannerMobile from '~/images/MeraPartners/InspectionMobileBanner.png';
import RightBannerVector from 'public/images/MeraPartners/RightBannerVector.png';
import { howItWorksHeaderData } from '@/data/how-it-works';
import { inspection } from '@/data/inspection';

export default function Inspection() {
  const data = inspection;
  const headerData = howItWorksHeaderData.inspection;

  return (
    <main>
      <Head>
        <title>Inspection</title>
      </Head>
      <section>
        <BannerWithVector
          heading=''
          subHeading='Schedule a comprehensive car inspection'
          splitHeadingFirstPart='Schedule a comprehensive'
          splitHeadingSecondPart='car inspection'
          srcPath={InspectionBanner}
          srcMobile={InspectionBannerMobile}
          srcVector={RightBannerVector}
          isInspection
        />
        <Pricing />
        <HowItWorks data={data} headerData={headerData} isInspection />
      </section>
    </main>
  );
}
