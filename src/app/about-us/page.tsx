import Head from 'next/head';
import * as React from 'react';
import Image from 'next/image';

import Faq from '@/components/strips/Faq';
import { AchievementBox } from '@/components/strips/Achievements';
import { AboutCompany } from '@/components/strips/AboutCompany';

export default function AboutPage() {
  return (
    <main>
      <Head>
        <title>About us</title>
      </Head>
      <section>
        <AboutCompany />
        <AchievementBox />
        <Faq />
      </section>
    </main>
  );
}
