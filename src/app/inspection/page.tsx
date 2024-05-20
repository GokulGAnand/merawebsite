import MeraPartners from '@/components/strips/MeraPartners';
import Pricing from '@/components/strips/Pricing';
import Head from 'next/head';
import * as React from 'react';

export default function Partners() {
  return (
    <main>
      <Head>
        <title>Inspection</title>
      </Head>
      <section>
        <Pricing />
        <MeraPartners />
      </section>
    </main>
  );
}
