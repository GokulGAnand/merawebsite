'use client';
import SlideContents from '@/components/banner/home-banner-slides/SlideContents';
import { StaticImageData } from 'next/image';
import ImageSlide from './ImageSlide';

interface Content {
  image: StaticImageData;
  mobileImage: StaticImageData;
  highlightedText: string;
  mainHeaderText: string;
  subHeaderText: string;
  description: string;
}

interface props {
  content: Content;
}

export default function BannerSlide({ content }: props) {
  const {
    image,
    mobileImage,
    highlightedText,
    mainHeaderText,
    subHeaderText,
    description,
  } = content;

  return (
    <div className='relative  w-full z-10 rounded-none  '>
      <ImageSlide mainBanner={image} mainBannerImage={mobileImage} />
      <div className='relative h-full flex z-20 w-full'>
        <SlideContents
          highlightedText={highlightedText}
          mainHeaderText={mainHeaderText}
          subHeaderText={subHeaderText}
          description={description}
        />
      </div>
    </div>
  );
}
