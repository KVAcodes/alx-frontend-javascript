export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const array = Array.from(set);
  return array
    .filter((string) => string.startsWith(startString))
    .map((string) => string.substring(startString.length))
    .reduce((accumulator, currentValue) => `${accumulator}-${currentValue}`);
}
