function positiveSum(arr) {
  if (!arr.length) {
    return 0;
  }

  const result = arr.filter(item => item >= 0);

  if (!result.length) {
    return 0;
  }

  return result.reduce((accum, curr) => accum + curr);
}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);
