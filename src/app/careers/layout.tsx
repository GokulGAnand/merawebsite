import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';
export const metadata: Metadata = {
  title: 'Careers',
  description: 'Careers Page',
};

export default function CareersLayout({
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
