import AutoplaySlider from '@/components/slider/AutoplaySlider';
import DownloadMeraPartners from '@/components/strips/DownloadMeraPartners';
import DownloadPartners from '@/components/strips/DownloadPartners';
import MeraPartners from '@/components/strips/MeraPartners';
import { PartnerFeedBack } from '@/components/strips/PartnerFeedback';
import PartnerWithUs from '@/components/strips/PartnerWithUs';
import Head from 'next/head';
import * as React from 'react';

export default function Partners() {
  return (
    <main>
      <Head>
        <title>MeraPartners</title>
      </Head>
      <section>
        <PartnerWithUs />
        <DownloadMeraPartners />
        <PartnerFeedBack />
        {/* <AutoplaySlider /> */}
        <MeraPartners />
      </section>
    </main>
  );
}
