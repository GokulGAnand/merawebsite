import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy Page',
};

export default function RefundLayout({
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
