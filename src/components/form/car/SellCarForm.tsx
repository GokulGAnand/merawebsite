'use client';
import FormSlideControl from '../components/FormSlideControl';
import FormChipGroup from '../chips/FormChipGroup';
import { ChipProps } from '@/lib/store/type';
import { SlideIndex } from './sell/slides';

interface Slide {
  [index: number]: React.JSX.Element;
}

interface SellCarProps {
  page: number;
  chips: ChipProps[];
  slides: Slide;
}

export default function SellCarForm(props: SellCarProps) {
  const { page, chips, slides } = props;
  const slideCount = Object.keys(slides).length;
  return (
    <div className='flex flex-col my-20 mx-4'>
      <div className='flex flex-wrap gap-1 max-w-3xl w-full mb-4 mx-auto'>
        <FormChipGroup chips={chips} />
      </div>
      <div
        className={`bg-white rounded-lg px-4 lg:px-8  py-7 shadow-carFormShadow flex flex-col w-full max-w-3xl min-h-[495px] max-h-[495px] overflow-y-auto  mx-auto custom-scroll`}
      >
        <div className='flex flex-col'>
          <FormSlideControl count={slideCount} />
          {slides[page as SlideIndex]}
        </div>
      </div>
    </div>
  );
}
