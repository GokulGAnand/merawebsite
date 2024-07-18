import Head from 'next/head';
import * as React from 'react';
import PageBanner from '@/components/banner/common/PageBanner';
import Banner from 'public/images/Careers/BannerImageNew.jpg';
import AboutBannerMobile from 'public/images/Careers/BannerMobileImage.jpg';
import Commitment from '@/components/strips/Commitment';
import CareerOverview from '@/components/strips/CareerOverview';

export default function CareersPage() {
  return (
    <main>
      <Head>
        <title>Careers</title>
      </Head>
      <section>
        <PageBanner
          heading='Explore Exciting Career Opportunities With Us'
          subHeading='Home/Careers'
          srcPath={Banner}
          srcMobile={AboutBannerMobile}
        />
        <CareerOverview />
        <Commitment />
      </section>
    </main>
  );
}
