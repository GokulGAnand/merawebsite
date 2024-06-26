import BannerWithVector from '@/components/banner/common/BannerWithVector';
import MeraPartnersBanner from 'public/images/MeraPartners/MeraPartnersBanner.png';
import MeraPartnersMobileBanner from 'public/images/MeraPartners/MeraPartnersMobileBanner.png';
import RightBannerVector from 'public/images/MeraPartners/RightBannerVector.png';
import Head from 'next/head';
import * as React from 'react';
import PartnerWithUs from '@/components/strips/PartnerWithUs';
import DownloadMeraPartners from '@/components/strips/DownloadMeraPartners';
import { PartnerFeedBack } from '@/components/strips/PartnerFeedback';
import AutoplaySlider from '@/components/slider/AutoplaySlider';
import HowItWorks from '@/components/strips/HowItWorks';
import { services } from '@/data/partner';
import { howItWorksHeaderData } from '@/data/how-it-works';

export default function Partners() {
  const data = services;
  const headerData = howItWorksHeaderData.partner;

  return (
    <main className='overflow-x-clip'>
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
        <HowItWorks data={data} headerData={headerData} isPartner />
        <PartnerFeedBack />
        {/* <AutoplaySlider /> */}
      </section>
    </main>
  );
}
