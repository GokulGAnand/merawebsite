/* eslint-disable @typescript-eslint/no-explicit-any */
interface SortProps {
  data: any[];
  desiredOrder: string[];
  key: string;
}

export const sortByDesiredOrder = (props: SortProps) => {
  const { data, desiredOrder, key = 'label' } = props;
  return data?.sort(
    (a: { [x: string]: string }, b: { [x: string]: string }) => {
      return desiredOrder.indexOf(a[key]) - desiredOrder.indexOf(b[key]);
    },
  );
};
