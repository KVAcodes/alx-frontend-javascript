export default function appendToEachArrayValue(array, appendString) {
  const modifiedArray = [...array];
  let index = 0;
  for (const item of array) {
    modifiedArray[index] = appendString + item;
    index += 1;
  }

  return modifiedArray;
}
