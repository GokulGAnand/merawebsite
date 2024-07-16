import { Metadata } from 'next';
import * as React from 'react';
import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';
export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Contact Us Page',
};

export default function ContactUsLayout({
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
