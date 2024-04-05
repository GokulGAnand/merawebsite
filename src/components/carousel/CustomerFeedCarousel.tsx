'use client';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import React, { useState } from 'react';

export default function CustomerFeedCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };
  return (
    <div className='flex flex-col justify-center items-center px-40'>
      <div className='flex  gap-7 mt-16 mb-8  justify-center'>
        {testimonials
          .slice(activeSlide * 3, activeSlide * 3 + 3)
          .map((item) => (
            <TestimonialCard
              key={item.customer}
              comments={item.comments}
              customer={item.customer}
              icon={item.icon}
              rating={item.rating}
            />
          ))}
      </div>
      <div className='flex gap-1'>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type='button'
            className={`bg-${
              index === activeSlide ? 'whiteButtonText' : 'dotColor'
            } w-2 h-2 rounded-full`}
            aria-current={index === activeSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
