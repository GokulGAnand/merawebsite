import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';
import PageBanner from '@/components/banner/common/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy Page',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionBlock>
        <PageBanner
          heading='Privacy Policy'
          subHeading='Privacy Policy SubHeading'
        />
        {children}
      </SectionBlock>
    </>
  );
}
