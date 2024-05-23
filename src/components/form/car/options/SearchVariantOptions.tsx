import ButtonOption from '../../components/ButtonOption';
import FormSideHeading from '../../components/FormSideHeading';
import { Options } from './type';

interface Props {
  varients: Options[];
}

export const SearchVariantOptions = (props: Props) => {
  const { varients } = props;
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <FormSideHeading text={'Select Variant'} />
      </div>
      <div className={`grid justify-between gap-5 lg:grid-cols-3`}>
        {varients?.map((option: Options) => {
          return (
            <ButtonOption
              key={option.display_name}
              value={option.id}
              chipValue={option.display_name}
              text={option.display_name}
              page={5}
              type='variant'
            />
          );
        })}
      </div>
    </div>
  );
};
