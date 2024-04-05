import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import { MainBanner } from '@/components/banner/MainBanner';
import GetCarPrice from '@/components/strips/GetCarPrice';
import { OurServices } from '@/components/strips/OurServices';
import { CustomerFeedBack } from '@/components/strips/CustomerFeedBack';
import Faq from '@/components/strips/Faq';
import { OurSteps } from '@/components/strips/OurSteps';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>MeraCars - Home</title>
      </Head>
      <section>
        <MainBanner />
        <OurServices />
        {/* <OurSteps />  */}
        <GetCarPrice />
        <CustomerFeedBack />
        <Faq />
      </section>
    </main>
  );
}
