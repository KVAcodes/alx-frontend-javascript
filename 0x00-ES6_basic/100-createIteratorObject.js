export default function createIteratorObject(report) {
  let iterable = [];

  for (const list of Object.values(report.allEmployees)) {
    iterable = [...iterable, ...list];
  }

  return iterable;
}
