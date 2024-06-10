import BannerWithVector from '@/components/banner/common/BannerWithVector';
import HowItWorks from '@/components/strips/HowItWorks';
import MeraPartners from '@/components/strips/MeraPartners';
import Pricing from '@/components/strips/Pricing';
import Head from 'next/head';
import * as React from 'react';
import InspectionBanner from '~/images/MeraPartners/InspectionBanner.png';
import InspectionBannerMobile from '~/images/MeraPartners/InspectionMobileBanner.png';
import RightBannerVector from 'public/images/MeraPartners/RightBannerVector.png';

export default function Partners() {
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
        <HowItWorks />
        <MeraPartners />
      </section>
    </main>
  );
}
