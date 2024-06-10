import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';

export const metadata: Metadata = {
  title: 'Inspection',
  description: 'Inspection Page',
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
