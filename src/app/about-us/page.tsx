import Head from 'next/head';
import * as React from 'react';
import Faq from '@/components/strips/Faq';
import { AchievementBox } from '@/components/strips/Achievements';
import { AboutCompany } from '@/components/strips/AboutCompany';
import PageBanner from '@/components/banner/common/PageBanner';
import Banner from 'public/images/AboutUs/AboutBanner.png';
import AboutBannerMobile from 'public/images/AboutUs/AboutBannerMobile.png';

export default function AboutPage() {
  return (
    <main>
      <Head>
        <title>About us</title>
      </Head>
      <section>
        <PageBanner
          heading='About us'
          subHeading='Home/About us'
          srcPath={Banner}
          srcMobile={AboutBannerMobile}
        />
        <AboutCompany />
        <AchievementBox />
        <Faq />
      </section>
    </main>
  );
}
