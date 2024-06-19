import BannerWithVector from '@/components/banner/common/BannerWithVector';
import MeraPartnersBanner from 'public/images/MeraPartners/MeraPartnersBanner.png';
import MeraPartnersMobileBanner from 'public/images/MeraPartners/MeraPartnersMobileBanner.png';
import RightBannerVector from 'public/images/MeraPartners/RightBannerVector.png';
import Head from 'next/head';
import * as React from 'react';
import PartnerWithUs from '@/components/strips/PartnerWithUs';
import DownloadMeraPartners from '@/components/strips/DownloadMeraPartners';
import HowItWorks from '@/components/strips/HowItWorks';
import { PartnerFeedBack } from '@/components/strips/PartnerFeedback';
import AutoplaySlider from '@/components/slider/AutoplaySlider';

export default function Partners() {
  return (
    <main>
      <Head>
        <title>MeraPartners</title>
      </Head>
      <section>
        <BannerWithVector
          heading='World of used cars in India'
          subHeading='Are you a Car Dealer? Join Us and Increase Your Revenue'
          srcPath={MeraPartnersBanner}
          srcMobile={MeraPartnersMobileBanner}
          srcVector={RightBannerVector}
        />
        <PartnerWithUs />
        <DownloadMeraPartners />
        <HowItWorks />
        <PartnerFeedBack />
        <AutoplaySlider />
      </section>
    </main>
  );
}
