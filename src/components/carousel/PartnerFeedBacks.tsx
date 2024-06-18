'use client';
import PartnerFeedCarousel from './PartnerFeedCarousel';
import useGetScreenSize from '@/hooks/useGetScreenSize';
import { Carousel } from 'flowbite-react';

function getTotalCarousels(screen: string) {
  return { numArray: [0, 1, 2], slidesPerPage: 1 };
}

export default function CustomerFeedBacks() {
  const screenSize = useGetScreenSize();
  const screenData = getTotalCarousels(screenSize);
  return (
    <div className='h-full'>
      <Carousel
        onSlideChange={(index) => console.log('onSlideChange()', index)}
        slideInterval={1000}
        indicators
        theme={{
          indicators: {
            active: {
              off: 'bg-whiteButtonText opacity-20 hover:bg-white ',
              on: 'bg-whiteButtonText',
            },
            base: 'h-2 w-2 rounded-full',
            wrapper:
              'absolute bottom-5 left-1/2 flex  -translate-x-1/2 space-x-1',
          },
          item: {
            base: 'absolute top-1/2 block w-3/4 -translate-x-1/2 -translate-y-1/2',
            wrapper: {
              off: 'w-full flex-shrink-0 transform cursor-default snap-center',
              on: 'w-3/4 flex-shrink-0 transform cursor-grab snap-center',
            },
          },
        }}
      >
        {screenData.numArray.map((number) => {
          return (
            <PartnerFeedCarousel
              key={number}
              carouselNumber={number}
              slides={screenData.slidesPerPage}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
