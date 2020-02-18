
// returns a random integer from min to max
export default (min = 1, max = 10) => {
  const minValue = parseInt(min);
  const maxValue = parseInt(max);
  return Math.floor(Math.random() * maxValue) + minValue;
};
