import PlayStoreButton from '~/svg/PlayStoreVector.svg';
import AppStoreButton from '~/svg/AppStoreVector.svg';
import { ReactElement } from 'react';
import { SlideButtonVariant } from './home-buttons';

interface DownloadButton {
  label: string;
  variant: SlideButtonVariant;
  icon?: ReactElement;
  link: string;
}

export const downloadButton: DownloadButton[] = [
  {
    label: 'Playstore Button',
    variant: 'light',
    icon: <PlayStoreButton width={144} height={33} />,
    link: 'https://play.google.com/store/apps/details?id=com.meracars.mera_partners&hl=en',
  },
  {
    label: 'App store button',
    variant: 'light',
    icon: <AppStoreButton width={144} height={33} />,
    link: 'https://apps.apple.com/in/app/mera-partners/id6502856774',
  },
];
