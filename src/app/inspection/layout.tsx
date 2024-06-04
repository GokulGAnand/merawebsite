import { Metadata } from 'next';
import '@/styles/colors.css';
import SectionBlock from '@/components/SectionBlock';

export const metadata: Metadata = {
  title: 'Car Inspection',
  description: 'Car Inspection',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SectionBlock>{children}</SectionBlock>
    </>
  );
}
