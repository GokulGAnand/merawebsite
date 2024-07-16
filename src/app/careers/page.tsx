import Head from 'next/head';
import * as React from 'react';
import Faq from '@/components/strips/Faq';
import ContactContent from '@/components/strips/ContactContent';
import PageBanner from '@/components/banner/common/PageBanner';
import Banner from 'public/images/Careers/BannerImage.jpg';
import AboutBannerMobile from 'public/images/Careers/BannerMobileImage.jpg';
import Commitment from '@/components/strips/Commitment';

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
        <Commitment />
      </section>
    </main>
  );
}
