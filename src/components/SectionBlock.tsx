import { cn } from '@/lib/utils';

type SectionProps = {
  className?: string;
  children?: React.ReactNode;
};

const SectionBlock: React.FC<SectionProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'w-full flex pb-[40px] xl:pb-[54px] 3xl:pb-[60px]  flex-col',
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionBlock;
