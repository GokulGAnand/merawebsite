import Overview from '~/images/Careers/OverviewImage.png';
import Vector from '~/images/Careers/Vector.png';
import VectorMobile from '~/images/Careers/VectorMobile.png';

interface hiringButton {
  label: string;
  link: string;
}

export const overview = [
  {
    heading: 'We hear Right',
    description:
      'Reach sales now and receive an overview of This Software platform from a product expert. Discuss your great process goals and explore tools to advance them, by filling out the form. We will be back in touch to help you start with increasing sales, gaining new contacts and making your business greater than it already is.',
    imageSrc: Overview,
  },
  {
    heading: 'We hear Right',
    description:
      'Reach sales now and receive an overview of This Software platform from a product expert. Discuss your great process goals and explore tools to advance them, by filling out the form. We will be back in touch to help you start with increasing sales, gaining new contacts and making your business greater than it already is.',
    imageSrc: Overview,
  },
  {
    heading: 'We hear Right',
    description:
      'Reach sales now and receive an overview of This Software platform from a product expert. Discuss your great process goals and explore tools to advance them, by filling out the form. We will be back in touch to help you start with increasing sales, gaining new contacts and making your business greater than it already is.',
    imageSrc: Overview,
  },
];

export const hiring = {
  header: 'About the Company',
  main_header: 'Open Roles. We’re hiring!',
  content:
    'Sell your car easily and get a top price with MeraCars Sell your car easily and get a top price with Mera Cars Sell your car easily.',
  vector: Vector,
  vector_mobile: VectorMobile,
};

export const hiringButton: hiringButton[] = [
  {
    label: 'See Roles',
    link: '/',
  },
];
