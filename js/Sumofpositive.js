function positiveSum(arr) {
  return arr.reduce((sum, num) => (num > 0 ? (sum += num) : sum), 0);
}
console.log(positiveSum([1, -4, 7, 12]));
