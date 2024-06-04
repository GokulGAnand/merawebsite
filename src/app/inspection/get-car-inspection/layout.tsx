import { Metadata } from 'next';
import '@/styles/colors.css';
import CarFormLayout from '@/components/layout/CarForm';

export const metadata: Metadata = {
  title: 'Inspection',
  description: 'Get Car Inspection',
};

export default function GetCarPriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CarFormLayout>{children}</CarFormLayout>
    </>
  );
}
