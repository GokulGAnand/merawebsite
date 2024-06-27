import Button from '@/components/buttons/Button';
import { useRouter } from 'next/navigation';

type downloadLink = string;
const ButtonVariant = ['primary', 'outline', 'ghost', 'light', 'dark'] as const;

interface props {
  variant: (typeof ButtonVariant)[number];
  link: string;
  label: string;
}

const BannerButton: React.FC<props> = ({ variant, link, label }) => {
  const router = useRouter();
  const handleClick = (link: downloadLink) => {
    router.push(link);
  };

  return (
    <Button
      variant={variant}
      className='font-bold min-w-40 lg:min-w-48 min-h-16 justify-center rounded-xl'
      onClick={() => handleClick(link)}
    >
      {label}
    </Button>
  );
};

export default BannerButton;
