import React from 'react';
import Vyshak from '~/svg/Vyshak.svg';
import Jamshad from '~/svg/Jamshad.svg';
import Derin from '~/svg/Derin.svg';
import Nighil from '~/svg/Nighil.svg';

interface Testimonial {
  customer: string;
  comments: string;
  icon: React.ReactNode;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    icon: <Vyshak width={60} height={60} />,
    rating: 5,
    customer: 'Vyshak',
    comments:
      'Selling my car was super quick and easy. Got a great deal without any trouble!',
  },
  {
    icon: <Jamshad width={60} height={60} />,
    rating: 5,
    customer: 'Jamshad',
    comments:
      'The inspection at home was so convenient. Really happy with the honest service.',
  },
  {
    icon: <Derin width={60} height={60} />,
    rating: 5,
    customer: 'Derin',
    comments:
      'I received my payment the very next day! Completely satisfied with the fast process.',
  },
  {
    icon: <Nighil width={60} height={60} />,
    rating: 5,
    customer: 'Nighil',
    comments:
      'I wanted to sell my car before migrating to Canada. The team was very helpful from start to finish!',
  },
];
