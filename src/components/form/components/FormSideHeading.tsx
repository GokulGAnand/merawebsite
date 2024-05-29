import React from 'react';

interface Props {
  text: string;
}

export default function FormSideHeading(props: Props) {
  const { text } = props;
  return (
    <div className='text-stepsText text-md leading-3 font-medium'>{text}</div>
  );
}
