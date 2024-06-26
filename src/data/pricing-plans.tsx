import CheckIcon from '~/svg/CheckIcon.svg';

export const pricingPlans = [
  {
    id: 1,
    title: 'Comprehensive',
    amount: '899',
    icon: <CheckIcon width={14} height={14} />,
    rowContent: [
      'Comprehensive Digital Report',
      '140+ Detailed Checkpoints',
      'Expert Evaluation',
      'Detailed Inspection Summary',
    ],
    actionContent: 'Schedule',
    link: '/inspection/get-car-inspection',
    isDisabled: false,
  },
  {
    id: 2,
    title: 'Comprehensive',
    amount: '899',
    icon: <CheckIcon width={14} height={14} />,
    rowContent: [
      'Comprehensive Digital Report',
      '140+ Detailed Checkpoints',
      'Expert Evaluation',
      'Detailed Inspection Summary',
    ],
    actionContent: 'Coming soon',
    link: '/',
    isDisabled: true,
  },
  {
    id: 3,
    title: 'Comprehensive',
    amount: '899',
    icon: <CheckIcon width={14} height={14} />,
    rowContent: [
      'Comprehensive Digital Report',
      '140+ Detailed Checkpoints',
      'Expert Evaluation',
      'Detailed Inspection Summary',
    ],
    actionContent: 'Coming soon',
    link: '/',
    isDisabled: true,
  },
];
