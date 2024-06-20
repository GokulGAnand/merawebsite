export type SlideButtonVariant =
  | 'primary'
  | 'light'
  | 'outline'
  | 'ghost'
  | 'dark';

export interface SlideButtonType {
  variant: SlideButtonVariant;
  label: string;
  link: string;
}

export const slideButton: SlideButtonType[] = [
  {
    variant: 'primary',
    label: 'Sell Your Car',
    link: '/sell-used-car',
  },
  {
    variant: 'light',
    label: 'Contact Us',
    link: '/contact-us',
  },
];
