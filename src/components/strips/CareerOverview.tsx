import React from 'react';
import { Carousel } from 'flowbite-react';
import CareerSlide from '../carousel/CareerSlide';
import { overview } from '@/data/career';

const CareerOverview = () => {
  return (
    <div className='w-full h-[600px] mt-12 lg:mt-16'>
      <Carousel
        pauseOnHover
        leftControl
        rightControl
        slideInterval={5000}
        indicators
        theme={{
          indicators: {
            base: 'w-8 h-1 bg-whiteButtonText hover:bg-gray-400 mx-1 rounded-none',
            active: {
              off: 'bg-whiteButtonText opacity-20 hover:bg-white ',
              on: 'bg-whiteButtonText',
            },
            wrapper:
              'absolute bottom-5 left-1/2 flex  -translate-x-1/2 space-x-1',
          },
        }}
      >
        {overview.map((slide, index) => (
          <CareerSlide
            key={index}
            heading={slide.heading}
            description={slide.description}
            imageSrc={slide.imageSrc}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CareerOverview;
