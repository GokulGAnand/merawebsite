import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface SectionBannerImageProps {
  image?: StaticImageData;
}

const SectionBannerImage: React.FC<SectionBannerImageProps> = ({ image }) => {
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt='Image'
          className={`object-contain`}
          loading='lazy'
        />
      ) : null}
    </div>
  );
};

export default SectionBannerImage;
