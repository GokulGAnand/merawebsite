'use client';
import CustomerFeedCarousel from '@/components/carousel/CustomerFeedCarousel';
import useGetScreenSize from '@/hooks/useGetScreenSize';
import { Carousel } from 'flowbite-react';

interface Testimonial {
  customer: string;
  comments: string;
  icon: React.ReactNode;
  rating: number;
}

interface props {
  data?: Testimonial[];
}

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

export default function CustomerFeedBacks(props: props) {
  const { data } = props;
  const screenSize = useGetScreenSize();
  const screenData = getTotalCarousels(screenSize);
  return (
    <div className='h-full lg:pb-16 pb-11'>
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
              data={data}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
