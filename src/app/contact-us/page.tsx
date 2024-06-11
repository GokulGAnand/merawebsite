import Head from 'next/head';
import * as React from 'react';
import Faq from '@/components/strips/Faq';
import ContactContent from '@/components/strips/ContactContent';

export default function AboutPage() {
  return (
    <main>
      <Head>
        <title>About us</title>
      </Head>
      <section>
        <ContactContent />
        <Faq />
      </section>
    </main>
  );
}
