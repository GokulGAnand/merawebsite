import { useEffect, useState } from 'react';

const getScreenClass = (width: number) => {
  if (width >= 1536) return '2xl';
  else if (width >= 1280) return 'xl';
  else if (width >= 1024) return 'lg';
  else if (width >= 768) return 'md';
  else if (width >= 640) return 'sm';
  else return 'xs';
};

export default function useGetScreenSize() {
  const [screenSize, setScreenSize] = useState(
    getScreenClass(window.innerWidth)
  );
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenClass(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}
