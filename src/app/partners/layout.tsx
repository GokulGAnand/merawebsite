import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';

export const metadata: Metadata = {
  title: 'MeraPartners',
  description: 'MeraPartners Page',
};

export default function MeraPartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionBlock>{children}</SectionBlock>
    </>
  );
}
