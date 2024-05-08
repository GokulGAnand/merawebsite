import React from 'react';
import Achievement from '~/svg/Achievement.svg';
import CarsSold from '~/svg/CarsSold.svg';
import Experience from '~/svg/Experience.svg';
import Trust from '~/svg/Trust.svg';

const iconStyles = {
  width: 64,
  height: 64,
};

export const achievements = [
  {
    id: 1,
    icon: <Experience {...iconStyles} />,
    title_content: '0',
    label: 'Years of Experience',
  },
  {
    id: 2,
    icon: <CarsSold {...iconStyles} />,
    title_content: '0K',
    label: 'Total Cars sold',
  },
  {
    id: 3,
    icon: <Achievement {...iconStyles} />,
    title_content: '0',
    label: 'Awards & Recognitions',
  },
  {
    id: 4,
    icon: <Trust {...iconStyles} />,
    title_content: '0K',
    label: 'Trusted Clients',
  },
];
