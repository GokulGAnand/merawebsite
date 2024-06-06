'use client';
import SellCarForm from '@/components/form/car/SellCarForm';
import { useGetSlides } from '@/components/form/car/inspection/slides';
import { useInspectionStore } from '@/lib/store/inspection-store';

export default function GetCarInspection() {
  const { chips, page, decrementPage, switchPage } = useInspectionStore();
  const slides = useGetSlides();
  return (
    <div className='flex flex-col justify-center'>
      <SellCarForm
        chips={chips}
        page={page}
        slides={slides}
        decrementPage={decrementPage}
        switchPage={switchPage}
      />
    </div>
  );
}
