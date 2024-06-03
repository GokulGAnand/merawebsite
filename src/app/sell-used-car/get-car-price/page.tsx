'use client';
import SellCarForm from '@/components/form/car/SellCarForm';
import { slides } from '@/components/form/car/options/slides';
import { useFormStore } from '@/lib/store/store';

export default function GetCarPricePage() {
  const { chips, page } = useFormStore();
  return (
    <div className='flex flex-col justify-center'>
      <SellCarForm chips={chips} page={page} slides={slides} />
    </div>
  );
}
