'use client';
import CustomerFeedCarousel from '@/components/carousel/CustomerFeedCarousel';
import useGetScreenSize from '@/hooks/useGetScreenSize';
import { Carousel } from 'flowbite-react';

function getTotalCarousels(screen: string) {
  switch (screen) {
    case '2xl':
    case 'xl':
      return { numArray: [0, 1], slidesPerPage: 3 };
    case 'lg':
      return { numArray: [0, 1], slidesPerPage: 2 };
    case 'md':
    case 'sm':
    case 'xs':
      return { numArray: [0, 1, 2, 3], slidesPerPage: 1 };
    default:
      return { numArray: [0, 1, 2, 3], slidesPerPage: 1 };
  }
}

export default function CustomerFeedBacks() {
  const screenSize = useGetScreenSize();
  const screenData = getTotalCarousels(screenSize);
  return (
    <div className='h-full '>
      <Carousel
        slideInterval={3000}
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
        }}
      >
        {screenData.numArray.map((number) => {
          return (
            <CustomerFeedCarousel
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
