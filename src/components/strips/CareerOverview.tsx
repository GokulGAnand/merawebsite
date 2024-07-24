import React from 'react';
import { Carousel } from 'flowbite-react';
import CareerSlide from '../carousel/CareerSlide';
import { overview } from '@/data/career';

const CareerOverview = () => {
  return (
    <div className='flex px-4 lg:px:0 justify-center'>
      <div className='flex w-[90%] lg:w-[88%] xl:w-[85%] h-[600px]'>
        <Carousel
          pauseOnHover
          leftControl
          rightControl
          slide={false}
          indicators
          theme={{
            indicators: {
              base: 'w-24 lg:w-32 h-1 hover:bg-gray-400 rounded-none',
              active: {
                off: 'bg-subHeadingColor opacity-20',
                on: 'bg-stepsText hover:bg-white',
              },
              wrapper: 'flex gap-2 lg:gap-3 lg:-mt-[13%]',
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
