import Head from 'next/head';
import * as React from 'react';
import Faq from '@/components/strips/Faq';
import ContactContent from '@/components/strips/ContactContent';
import PageBanner from '@/components/banner/common/PageBanner';
import Banner from 'public/images/ContactUs/ContactUsBanner.jpg';
import AboutBannerMobile from 'public/images/AboutUs/AboutBannerMobile.png';

export default function AboutPage() {
  return (
    <main>
      <Head>
        <title>About us</title>
      </Head>
      <section>
        <PageBanner
          heading='Contact us'
          subHeading='Home/Contact us'
          srcPath={Banner}
          srcMobile={AboutBannerMobile}
        />
        <ContactContent />
        <Faq />
      </section>
    </main>
  );
}
