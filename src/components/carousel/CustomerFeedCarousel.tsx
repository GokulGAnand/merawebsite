'use client';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function CustomerFeedCarousel({
  carouselNumber,
  slides,
}: {
  carouselNumber: number;
  slides: number;
}) {
  const start = slides * carouselNumber;
  const end = start + slides;
  return (
    <>
      <div className=' flex flex-col justify-center items-center mb-8   '>
        <div className='flex  gap-7 mt-16 mb-8 w-[90%] lg:w-[88%] xl:w-[85%]  justify-center'>
          {testimonials.slice(start, end).map((item) => (
            <TestimonialCard
              key={item.customer}
              comments={item.comments}
              customer={item.customer}
              icon={item.icon}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}
