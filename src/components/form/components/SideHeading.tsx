interface SideHeadingProps {
  heading: string;
}

export const SideHeading = (props: SideHeadingProps) => {
  const { heading } = props;
  return <h4 className='leading-6 font-medium text-stepsText'>{heading}</h4>;
};
