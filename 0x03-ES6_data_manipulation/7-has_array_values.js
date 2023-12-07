export default function hasValuesFromArray(set, array) {
  return array
    .reduce((accumulator, currentValue) => {
      const isTrue = accumulator === false ? false : set.has(currentValue);
      return isTrue;
    }, true);
}
