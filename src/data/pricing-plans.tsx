import CheckIcon from '~/svg/CheckIcon.svg';

export const pricingPlans = [
  {
    id: 1,
    title: 'Basic',
    amount: '1060',
    icon: <CheckIcon width={14} height={14} />,
    rowContent: [
      'Digital Report',
      '140+ Checkpoints',
      'Access to all modules',
      'Access to all modules',
    ],
    actionContent: 'Schedule',
    link: '/inspection/get-car-inspection',
    isDisabled: false,
  },
  {
    id: 2,
    title: 'Basic',
    amount: '1299',
    icon: <CheckIcon width={14} height={14} />,
    rowContent: [
      'Digital Report',
      '140+ Checkpoints',
      'Access to all modules',
      'Access to all modules',
    ],
    actionContent: 'Coming soon',
    link: '/',
    isDisabled: true,
  },
  {
    id: 3,
    title: 'Basic',
    amount: '1299',
    icon: <CheckIcon width={14} height={14} />,
    rowContent: [
      'Digital Report',
      '140+ Checkpoints',
      'Access to all modules',
      'Access to all modules',
    ],
    actionContent: 'Coming soon',
    link: '/',
    isDisabled: true,
  },
];
