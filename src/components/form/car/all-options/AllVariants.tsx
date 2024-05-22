import FormSideHeading from '../../components/FormSideHeading';
import VariantOptions from '../options/VariantOption';

export default function AllVariants() {
  return (
    <div className='flex flex-col gap-4 mt-10'>
      <FormSideHeading text={'Select Fuel Type'} />
      <div>
        <VariantOptions />
      </div>
    </div>
  );
}
