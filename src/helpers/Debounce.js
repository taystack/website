// Usage
// see https://lodash.com/docs/4.17.15#debounce

export default function debounce(debouncedMethod, milliseconds) {
  let debouncing = false;
  return (...args) => {
    if (debouncing) return;
    debouncing = true;
    setTimeout(() => {
      debouncing = false;
      return debouncedMethod(...args);
    }, milliseconds);
  };
}
