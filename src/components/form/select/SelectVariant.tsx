import AllVariants from '../car/all-options/AllVariants';

export default function SelectVariant() {
  return (
    <>
      <div className='text-stepsText text-lg leading-normal mb-4 mt-6 font-medium'>
        Select Variant of your car
      </div>
      <div className='mt-14 flex flex-col gap-4'>
        <AllVariants />
      </div>
    </>
  );
}
