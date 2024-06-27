import NextImage from '@/components/NextImage';
import { MainBanner } from '../MainBanner';
import { StaticImageData } from 'next/image';

interface props {
  mainBanner: StaticImageData;
  mainBannerImage: StaticImageData;
}

export default function ImageSlide(props: props) {
  const { mainBanner, mainBannerImage } = props;

  return (
    <div className='w-full flex flex-1 h-full  aspect-square absolute inset-0 rounded-none  '>
      <NextImage
        src={mainBanner}
        layout='fill'
        alt='car'
        className='hidden lg:flex'
      />
      <NextImage
        src={mainBannerImage}
        layout='fill'
        alt='background pattern'
        className='flex lg:hidden'
      />
    </div>
  );
}
