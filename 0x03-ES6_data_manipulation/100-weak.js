export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const curr = weakMap.get(endpoint);
    if (curr >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, curr + 1);
  }
}
