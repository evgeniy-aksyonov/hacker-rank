const squareSum = (numbers) => {
  return (!numbers || numbers.length === 0) 
    ? 0 // empty array or zero args
    : numbers.reduce((accum, curr) => accum + curr**2);
};



console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
console.log(squareSum());
console.log(squareSum([7,0,-13,1,14,-3,10,6]));