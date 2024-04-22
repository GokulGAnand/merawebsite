import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';
import PageBanner from '@/components/banner/common/PageBanner';
import SectionBlock from '@/components/SectionBlock';

export const metadata: Metadata = {
  title: 'About us',
  description: 'About Us Page',
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionBlock>
        <PageBanner heading='About us' subHeading='Home/About us' />
        {children}
      </SectionBlock>
    </>
  );
}
