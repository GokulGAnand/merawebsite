import Email from '~/svg/Email.svg';
import Phone from '~/svg/Phone.svg';
import Location from '~/svg/Mark.svg';

export const contacts = [
  {
    value: 'office@teamtechmedia.com',
    icon: <Email width={20} height={20} />,
  },
  {
    value: '+91-8113027722',
    icon: <Phone width={20} height={20} />,
  },
  {
    value:
      'TeamTech Media Private Limited. Door No. 71/232, Puthiyamadem Parambil, Elathur Village, Athanikkal, Westhill, Kannur Road',
    icon: <Location width={20} height={20} />,
  },
];