import { Metadata } from 'next';
import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';

export const metadata: Metadata = {
  title: 'Sell Your Car',
  description: 'Sell Your Car',
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
