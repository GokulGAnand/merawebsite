/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  text: string;
  array: any[];
  key: string;
}

export const filterByText = (props: Props) => {
  const { array, text, key } = props;

  if (!array.length) {
    return [];
  }

  const formattedText = text.charAt(0).toUpperCase() + text.slice(1);

  return array.filter((item) => {
    const value = item[key];
    return typeof value === 'string' && value.startsWith(formattedText);
  });
};
