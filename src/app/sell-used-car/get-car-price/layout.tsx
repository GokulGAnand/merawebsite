import { Metadata } from 'next';
import '@/styles/colors.css';
import CarFormLayout from '@/components/layout/CarForm';

export const metadata: Metadata = {
  title: 'Get Car Price',
  description: 'Get Car Price',
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
