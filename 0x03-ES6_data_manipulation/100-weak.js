export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    let curr = weakMap.get(endpoint);
    curr += 1;
    if (curr >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, curr);
  }
}
