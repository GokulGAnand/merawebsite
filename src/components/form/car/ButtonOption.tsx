import Image from 'next/image';
import React from 'react';

interface Props {
  text?: string;
  imgSrc?: string;
}

export default function ButtonOption(props: Props) {
  const { text, imgSrc } = props;
  return (
    <button className=' flex flex-shrink-0 px-3 py-5 bg-formButton rounded-md cursor-pointer justify-center align-middle'>
      {text}
      {imgSrc && <Image src={imgSrc} width={75} height={40} alt='Logo' />}
    </button>
  );
}
