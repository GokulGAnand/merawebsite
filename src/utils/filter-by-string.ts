interface Props<T> {
  text: string;
  array: T[];
  key: keyof T;
}

export const filterByText = <T>({ array, text, key }: Props<T>): T[] => {
  if (!array.length || !text) {
    return [];
  }

  const formattedText = normalizeText(text);

  return array.filter((item) => {
    const value = item[key];
    if (typeof value !== 'string') return false;

    const formattedValue = normalizeText(value);

    return (
      formattedValue.includes(formattedText) ||
      containsInOrder(formattedValue, formattedText)
    );
  });
};

const normalizeText = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
};

const containsInOrder = (value: string, text: string): boolean => {
  let index = 0;
  for (const char of text) {
    index = value.indexOf(char, index);
    if (index === -1) return false;
    index++;
  }
  return true;
};
