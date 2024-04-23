import React from 'react';
import Achievement from '~/svg/Achievement.svg';
import CarsSold from '~/svg/CarsSold.svg';
import Experience from '~/svg/Experience.svg';
import Trust from '~/svg/Trust.svg';

export const achievements = [
  {
    id: 1,
    icon: <Experience width={63.83} height={63.83} />,
    title_content: '0',
    label: 'Years of Experience',
  },
  {
    id: 2,
    icon: <CarsSold width={63.83} height={63.83} />,
    title_content: '0K',
    label: 'Total Cars sold',
  },
  {
    id: 3,
    icon: <Achievement width={63.83} height={63.83} />,
    title_content: '0',
    label: 'Awards & Recongnitions',
  },
  {
    id: 4,
    icon: <Trust width={63.83} height={63.83} />,
    title_content: '0K',
    label: 'Trusted Clients',
  },
];
