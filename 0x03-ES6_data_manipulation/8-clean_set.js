export default function cleanSet(set, startString = '') {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const array = Array.from(set);
  return array
    .filter((string) => typeof string === 'string' && string.startsWith(startString))
    .map((string) => string.substring(startString.length))
    .reduce((accumulator, currentValue) => `${accumulator}-${currentValue}`);
}
