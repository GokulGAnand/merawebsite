import React from 'react';
import { Carousel } from 'flowbite-react';
import CareerSlide from '../carousel/CareerSlide';
import { overview } from '@/data/career';

const CareerOverview = () => {
  return (
    <div className='flex mt-12 lg:mt-16'>
      <div className='w-full h-[600px]'>
        <Carousel
          pauseOnHover
          leftControl
          rightControl
          slideInterval={100000}
          indicators
          theme={{
            indicators: {
              base: 'w-32 h-1 hover:bg-gray-400 rounded-none',
              active: {
                off: 'bg-subHeadingColor opacity-20',
                on: 'bg-stepsText hover:bg-white',
              },
              wrapper:
                'flex absolute left-1/4 bottom-1/4 -translate-x-1/2 space-x-1 gap-x-3',
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
    </div>
  );
};

export default CareerOverview;
