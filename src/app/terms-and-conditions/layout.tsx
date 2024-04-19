import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';
import PageBanner from '@/components/banner/common/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Condition Page',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionBlock>
        <PageBanner heading='Terms and Conditions' subHeading='' />
        {children}
      </SectionBlock>
    </>
  );
}
