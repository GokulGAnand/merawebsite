import { useFormStore } from '@/lib/store/store';
import AllVariants from '../all-options/AllVariants';
import SelectedEditableOption from '../../../components/SelectedEditableOption';
import { capitaliseFirstLetter } from '@/utils/capitalise-first-letter';

export default function SelectVariant() {
  const { selections } = useFormStore();
  const fuelType = selections?.find(
    (item: { type: string }) => item.type === 'fuel',
  );
  const transmission = selections?.find(
    (item: { type: string }) => item.type === 'transmission',
  );
  const selectedOpts = [fuelType, transmission]?.filter(Boolean);
  return (
    <>
      <div>
        <div className='text-stepsText text-lg leading-normal mb-4 mt-6 font-medium'>
          Select Variant of your car
        </div>
        <div
          className={`grid justify-between gap-5 grid-cols-2 lg:grid-cols-3`}
        >
          {selectedOpts?.map((item: { value: string; type: string }) => {
            return (
              <SelectedEditableOption
                key={item.type}
                type={item.type}
                text={capitaliseFirstLetter(item.value)}
              />
            );
          })}
        </div>
      </div>
      <div className='mt-4 lg:mt-14 flex flex-col gap-4'>
        <AllVariants />
      </div>
    </>
  );
}
