export default function getNumberArray(num: number) {
  return Array.from({ length: num }, (v, i) => i);
}
