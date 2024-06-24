/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import { MainBanner } from '@/components/banner/MainBanner';
import { OurServices } from '@/components/strips/OurServices';
import { CustomerFeedBack } from '@/components/strips/CustomerFeedBack';
import Faq from '@/components/strips/Faq';
import { OurSteps } from '@/components/strips/OurSteps';
import CallToAction from '@/components/strips/GetCarPriceCta';

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
    <main className='overflow-x-clip'>
      <Head>
        <title>MeraCars - Home</title>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-X6N59WN50T'
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X6N59WN50T');
          `}
        </script>
        <script>
          {`
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return; n=f.fbq=function() {
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              };
              if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[]; t=b.createElement(e); t.async=!0;
              t.src=v; s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '827600532663696');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=827600532663696&ev=PageView&noscript=1'
          />
        </noscript>
      </Head>
      <section>
        <MainBanner />
        <OurServices />
        <OurSteps />
        <CallToAction />
        <CustomerFeedBack />
        <Faq />
      </section>
    </main>
  );
}
