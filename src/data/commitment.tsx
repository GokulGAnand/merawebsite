import React from 'react';
import Hand from '~/images/Careers/Icons/Hand.svg';
import Bulb from '~/images/Careers/Icons/Bulb.svg';
import Scope from '~/images/Careers/Icons/Scope.svg';
import Heart from '~/images/Careers/Icons/Heart.svg';

const iconStyles = {
  width: 60,
  height: 60,
};

export const titleContent = {
  header: 'Our Commitment',
  subHeading: 'See what our happy customers say about MeraCars',
};

export const commitments = [
  {
    id: 1,
    icon: <Hand {...iconStyles} />,
    label: 'We work together as a friendly, supportive team',
  },
  {
    id: 2,
    icon: <Bulb {...iconStyles} />,
    label: 'We work together as a friendly, supportive team',
  },
  {
    id: 3,
    icon: <Scope {...iconStyles} />,
    label: 'We work together as a friendly, supportive team',
  },
  {
    id: 4,
    icon: <Heart {...iconStyles} />,
    label: 'We work together as a friendly, supportive team',
  },
];
